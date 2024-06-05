import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import RegisterPage from "./pages/RegisterPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AuthRequired from "./components/AuthRequired";
import { backendUrl } from "./api/api";

function App() {
  const [token, setToken] = useState(); // current access token; der, der gerade aktuell ist
  const [user, setUser] = useState();
  const [refreshToken, setRefreshToken] = useState();

  const navigate = useNavigate();

  // ! Silent Refresh
  //* Variante 1 mit fester Zeit und Intervall:
  // useEffect(() => {
  //   if (!refreshToken) return;

  //   function doSilentRefresh() {
  //     const tokenExpiration = 9.5 * 60 * 1000;
  //     setInterval(async () => {
  //       try {
  //         const response = await fetch(`${backendUrl}/api/v1/refresh-token`, {
  //           method: "POST",
  //           headers: { authorization: `Bearer ${refreshToken}` },
  //         });

  //         const data = await response.json();
  //         setToken(data.result.newAccessToken);
  //       } catch (err) {
  //         console.log(err);
  //         navigate("/login");
  //       }
  //     }, tokenExpiration);
  //   }

  //   doSilentRefresh();
  // }, [refreshToken]);

  //* Variante 2 mit dynamischer Zeit
  // useEffect(() => {
  //   if (!refreshToken) return;

  //   function doSilentRefresh(currentAccessToken) {
  //     const tokenExpiration = calcTokenExpDuration(currentAccessToken); // --> ruft die Berechnungsfunktion auf mit den Daten des gerade aktuellen accesTokens

  //     setTimeout(async () => {
  //       try {
  //         const response = await fetch(`${backendUrl}/api/v1/refresh-token`, {
  //           method: "POST",
  //           headers: { authorization: `Bearer ${refreshToken}` },
  //         });

  //         const data = await response.json();
  //         setToken(data.result.newAccessToken);
  //         doSilentRefresh(data.result.newAccessToken); // rekursion => wenn eine Funktion sich selbst aufruft // Funktion wird mit aktualisiertem Token immer wieder aufgerufen
  //       } catch (err) {
  //         console.log(err);
  //         navigate("/login");
  //       }
  //     }, tokenExpiration);
  //   }

  //   function calcTokenExpDuration(accessToken) {
  //     const tokenPayloadBase64 = accessToken.split(".")[1]; // --> splittet Token und nimmt nur den ersten Teil, den Base64 Token
  //     const tokenPayloadJson = atob(tokenPayloadBase64); // --> gibt uns einen json string
  //     const tokenPayload = JSON.parse(tokenPayloadJson); // --> parsed den string
  //     const duration = tokenPayload.exp - tokenPayload.iat; // --> berechnet die Gültigkeitsdauer des Tokens (Expiration Time minus Issued at time)
  //     const nextFetchAfter = duration - 30; // --> 30 Sekunden vor Ende der Gültigkeit soll der neue Fetch ausgeführt werden
  //     return nextFetchAfter * 1000;
  //   }

  //   doSilentRefresh(token);
  // }, [refreshToken]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verifyEmail/:userId" element={<VerifyEmailPage />} />
        <Route
          path="/login"
          element={<LoginPage setToken={setToken} setUser={setUser} />}
        />

        {/* protected route: diese Seite darf der User nur aufrufen, wenn er authentifiziert ist, er also einen gültigen Token hat, andernfalls wird er auf die Login-Seite weitergeleitet */}
        <Route
          path="/dashboard"
          element={
            <AuthRequired token={token} setToken={setToken}>
              <DashboardPage token={token} user={user} />
            </AuthRequired>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
