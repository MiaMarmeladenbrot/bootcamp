// # Starten einer React app
// https://vitejs.dev/guide/

// 1. npm create vite@latest
// 2. y -> eintippen um weiter zu machen
// 3. projekt-name erstellen (ohne leerzeichen / umlaute etc)
// 4. React auswählen
// 5. JS auswählen
// 6. cd <projektname> // - navigiert in unserem react projekt rein
// 7. npm install //- installiert alle pakete die für React benötigt werden
// 8. npm run dev //- Startet das Projekt

// # Ordnerstruktur in React
// node_modules //- Dort befinden sich alle packete die für react benötigt werden (wir können auch packete zz instalieren)

// public //- Dort werden alle datein gespeicher die unverändert ausgegeben werdne => Bild / Fonts

// src // - hier werden wir 90% unserer zeit verbingen. Hier Programmieren wir. In der Regel erstellen wir in den "src" ordner nochmal 2 ordner mit "pages" & "components"

// .gitignore // - hier schreiben wir alles rein was nicht in github hochgeladen werdne soll

// index.html //- ist der Startpunkt von unserer App. in unserem div hioer mit der id "root" wir alles reingerendert

// package-lock.json //- Hier befinden sich alle benötigten npm packet ink version.

// package.json //- Hier befinden sich infos über unsere APP -> Name Version etc.

// README.md //- Hier kommen infos rein wie zb eine kleine beschriebung zum projekt / App

// vite.config.js //- hier können wir vite anpassen

// JSX = Javascript Syntax Extension

// # App.css vs Index.css
// in die index.css kommen alle generelle stylings wie FontFamily h1-h6. In die App.css machen wir nur die stylings für die page App.jsx

import "./App.css";
import Home from "./page/Home/Home";

function App() {
  return <Home />;
}

export default App;
