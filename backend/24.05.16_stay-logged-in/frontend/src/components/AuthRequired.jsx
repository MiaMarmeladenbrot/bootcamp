// ! Komponente für protected routes & für stay logged in des Users
// checkt, ob der User einen gültigen Token hat
// nur wenn er ihn hat, kann er die Children von AuthRequired anzeigen lassen
// falls er keinen mehr hat, wird er zum Login weitergeleitet
// erweitert:
// checkt erst, welchen Status der User hat (gültiger oder ungültiger accessToken, gültiger oder ungültiger refreshToken)
// abhängig von dem Check gelangt der User entweder zu den children (grüner Status), erhält einen aktualisierten accessToken (blauer Status) oder wird zum Login weitergeleitet (roter Status)

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../api/api";

const AuthRequired = ({ token, setToken, children }) => {
  //* state, der bestimmt, ob neugeladen werden muss oder nicht
  // solange es noch kein Token gesetzt ist, ist der loading-state auf true gesetzt
  // sobald es einen gibt, wird er auf false gesetzt
  // falls es einen Token gibt, müssen wir nicht neu laden, weil wir bereits eingeloggt sind
  // falls wir keinen Token haben, müssen wir neu laden, um einen Token zu bekommen -> Weiterleitung zum Login
  const [loading, setLoading] = useState(token ? false : true);

  //* Variable, um den aktuellen timeout für den Refresh zu speichern
  // mit useRef kann ich Werte zwischen Renderings beibehalten, kann also zum Speichern eines veränderlichen Werts genutzt werden, der bei einer Aktualisierung kein erneutes Rendern verursacht
  // gibt ein Objekt namens current zurück
  // in dieser Variable will ich also den jeweils aktuellen Wert für den Timeout speichern, ohne dass sich dadurch etwas am Rendern ändert
  const timeoutRef = useRef(null);
  console.log(timeoutRef);

  const navigate = useNavigate();

  // Idee:
  // wir nehmen an, dass die Seite gerade reloaded wurde => es gibt also keinen Token
  // dann wird zuerst versucht, mit einem refresh Token einen access Token zu generieren
  // falls das klappt => show children
  // falls nicht, navigiere zum Login, damit der User sich erst mal einloggt, dabei refresh und access Token erhält
  useEffect(() => {
    // * grüner State: User wurde gerade eingeloggt, hat also gültigen accessToken
    // muss jetzt nur noch den silent refresh starten, damit der accessToken sich im Hintergrund erneuert und der User weiterhin eingeloggt bleibt
    if (token) return doSilentRefresh(token);

    // * Funktion, um zu prüfen, ob der User schon einmal eingeloggt war
    // dazu nutzen wir den refresh-token-Fetch, dem wir die credentials aus http only cookies mitgeben
    // Backend prüft daraufhin, ob für den User gültiger RefreshToken besteht
    // falls welche bestehen -> blauer State: User war schon mal eingeloggt, aber accessToken ist abgelaufen, er braucht also einen neuen
    // falls keine bestehen -> invalide auth: User hat weder access- noch refreshToken und muss sich erst mal einloggen, um welche zu bekommen
    async function checkLoggedIn() {
      console.log("check if User was logged in previously");
      const response = await fetch(`${backend}/api/v1/users/refresh-token`, {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (data.result) {
        // * falls es eine response mit result aus dem Backend gibt: blauer Status:
        // User war schon mal eingeloggt, der accessToken ist aber abgelaufen, weshalb wir über refresh-token-Fetch einen neuen anfordern müssen
        console.log("User once was logged in, got new access token");
        setToken(data.result.newAccessToken);
        doSilentRefresh(data.result.newAccessToken);
      } else {
        // * falls es keine res mit result aus dem Backend gibt: roter Status:
        // User war noch nie eingeloggt bzw. hat keinen gültigen refresh Token mehr und muss sich neu einloggen
        console.log("User was never logged in or not anymore logged in");
        navigate("/login");
      }

      // in jedem der Fälle soll der loading-Status auf false gesetzt werden, weil wir jetzt nicht mehr laden
      setLoading(false);
    }

    // Funktionsaufruf, um den Login-Status des Users zu prüfen
    checkLoggedIn();

    // * Funktion, um den silent refresh auszulösen
    // diese Funktion wird immer dann aufgerufen, wenn der User einen gültigen refreshToken und einen accessToken hat, also im grünen und blauen Status
    // in beiden Fällen soll der accessToken erneuert werden, entweder sofort (blau) oder später kurz bevor er abgelaufen ist (grün)
    function doSilentRefresh(currenAccessToken) {
      // dafür müssen wir berechnen, wie lange der accessToken gültig ist und ab welchem Moment wir den Timeout in dieser Funktion ausführen müssen
      const tokenExpirationIntervall = calcTokenExpDuration(currenAccessToken);
      console.log("Doing silent refresh in ", tokenExpirationIntervall);

      // in die Variable timeoutRef speichern wir unter "current" den aktuellen Timeout
      timeoutRef.current = setTimeout(async () => {
        try {
          // * Fetch, um den accesToken im Backend zu refreshen
          console.log("Fetching backend for silent refresh");
          const response = await fetch(`${backendUrl}/api/v1/refresh-token`, {
            method: "POST",
            credentials: "include",
          });

          // falls es keine response mit einem result gibt, muss User sich erst einloggen
          if (!data.result) navigate("/login");

          // falls es eine response mit result gibt, diese in JS Object umwandeln
          const data = await response.json();
          console.log({ data });

          // den aus dem fetch gewonnenen neuen (!) accesToken im token-State speichern und gleichzeitig den silent refresh mit diesem token aufrufen, damit er in 10 Minuten von allein wieder losgeht
          setToken(data.result.newAccessToken);
          doSilentRefresh(data.result.newAccessToken);
        } catch (err) {
          // falls es irgendein Problem gibt, zum Login navigieren
          console.log(err);
          navigate("/login");
        }
      }, tokenExpirationIntervall); // das Intervall, in dem der Timeout bei jedem Aufruf stattfinden soll
    }

    // * Funktion, um die Ablaufdauer des accessToken und das Intervall für den Refresh zu berechnen
    function calcTokenExpDuration(accessToken) {
      // holen uns den Token als Base64-String (besteht aus 3 Teilen getrennt durch Punkte)
      // den splitten wir an den Punkten
      // im zweiten Teil [1] finden wir den Payload, also die Infos zu exp und iat, nur das brauchen wir:
      const tokenPayloadBase64 = accessToken.split(".")[1];
      // wandeln Payload in ASCII String um und parsen:
      const tokenPayloadJson = atob(tokenPayloadBase64);
      const tokenPayload = JSON.parse(tokenPayloadJson);
      // berechnen mit den einzelnen Bestandteilen die Differenz zw. expires und issued at:
      const duration = tokenPayload.exp - tokenPayload.iat;
      // ziehen von der Differenz 30 Sekunden ab:
      const nextFetchAfter = duration - 30;
      // returnen die Differenz minus 30 Sekunden in Millisekunden:
      return nextFetchAfter * 1000;
    }

    //# bevor die Funktion beendet wird, muss der aktuelle Timeout-Wert wieder gecleared werden
    // ansonsten vermehren sich die Timeouts proportional?
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // * während loading auf true steht, soll nur "loading" angezeigt werden
  if (loading) return "... loading ...";
  // * sobald loading auf false steht (also ein accessToken und ein refreshToken vorliegen), sollen die Kinder von AuthRequired angezeigt werden, also zB das Dashboard
  else return <>{children}</>;
};

export default AuthRequired;

/* <AuthRequired>
    // ... children
    // ... children
    // ... children
    </AuthRequired>; */
