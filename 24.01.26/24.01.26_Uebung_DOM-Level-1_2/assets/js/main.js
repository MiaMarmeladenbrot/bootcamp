// - Lernziel: Mit Javascript die Struktur und den Inhalt einer Webseite ändern (DOM-Manipulation).

// - Verwende den vorgegebenen HTML-Code (siehe Code-Snippet) und erstelle mit document.getElementById(“info”).innerHTML eine h1 mit dem Text “Hello World”. Füge noch eine h2 hinzu mit dem Text “How are you?”. Siehe dir anschließend das Ergebnis über den Liveserver an.

document.getElementById("info").innerHTML =
  "<h1> Hello World </h1>" + "<h2> How are you? </h2>";

// - Füge im HTML noch ein <div> mit der ID “container” ein. Nutze document.getElementById('container').innerHTML, um einen <p>-Tag mit dem Text “start of the element” zu kreieren. Schreibe nun document.write("end of the element"). Analysiere das Ergebnis im Liveserver.

document.getElementById("container").innerHTML =
  "<p> start of the element </p>";
document.write("end of the element");
