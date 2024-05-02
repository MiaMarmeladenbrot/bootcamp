// # Starten einer react-App
// https://vitejs.dev/guide/

// 1. npm create vite@latest
// 2. evtl y eintippen, um weiterzumachen
// 3. Projektnamen eintippen
// 4. react auswählen
// 5. JS auswählen
// 6. cd Projektname --> navigiert in den Projektordner
// 7. npm install --> installiert alle für react notwendigen Pakete
// 8. run npm dev --> startet Live-Server für das Projekt

// # Ordner Struktur
// ist fest vorgegeben
// jsx = JavaScript Syntax Extension

// node_modules = alle Pakete, die für react benötigt werden (Pakete können auch zusätzlich installiert werden)
// publich = speichert alle Dateien, die unverändert ausgegeben und nur benutzt werden werden (zB img oder fonts)
// src = hier werden wir 90% unserer Zeit verbringen, hier programmieren wir. idR erstellen wir im src-Ordner noch 2 Ordner: pages und components
// eslintrc.cjs = ESLint is a popular open-source JavaScript linting utility. It analyzes your code for potential errors, and enforces coding standards while improving code quality. It can also help you as a developer to identify and fix common mistakes, use best practices, and maintain consistency across your codebase. -> hilft also den Code zu optimieren
// .gitignore = alles, was nicht in Github hochgeladen werden soll
// index.html = Startpunkt der App, darin liegt ein div namens root, in dieses div werden sämtliche HTML-Elemente gepackt; deshalb ist semantisches HTML nicht mehr ganz so streng zu nutzen; root-div niemals stylen, nicht anfassen
// package-lock.js = hier befindet sich eine Übersicht aller benötigten npm-Pakete, die in node_modules enthalten sind und die nicht in GitHub hochgeladen werden; damit kann ich mir dann via "npm install" die benötigten Packages dazu laden, sollte ich das Projekt aus GitHub runterladen
// package.json = hier befinden sich Infos über unsere App (Name, Version, etc)
// README.md = Infos übers Projekt, die im GitHub dann schöner ausschauen
// vite.config.js = intern vite anpassen

// # App.css vs index.css
// index.css = alles, was global ist (allgemeines Styling)
// App.css = alles, was die page App.jsx betrifft

// # neue Seite erstellen
// erstelle einen page- und einen components-Ordner in src
// in page-Ordner neuer Ordner zB Home, darin Home.jsx und Home.css
// in Home.jsx zuerst eine neue Funktion erstellen und exportieren
// // mit sfc erstellen wir Funktionsvorlage + export default (stateless function component, https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
// die dann in App.jsx importieren (wenn ich beim return <H schreibe, wird mir Home schon vorgeschlagen, wenn ich darauf klicke, wird es automatisch auch importiert)
// CSS in die neue Datei Home.jsx importieren:
// // import "./Home.css";
// Klassen werden jetzt als className vergeben:
// // <div className="home">
// damit es nicht zu Klassenkonflikten beim Stylen kommt, unbedingt mit konkreten Klassen arbeiten und dann immer zuerst Klasse auswählen und dann darin stylen
// unter return eingefügte HTML-Tags können nur mit einem wrappenden Element eingefügt werden, zB ein div um alles drumherum; kann auch ein leerer Tag sein <> & </>
// neue Komponenten-Ordner erstellen, sobald ein Bereich komplizierteres JS erfordert

import "./App.css";
import Home from "./page/Home/Home";

function App() {
  return <Home />;
}

export default App;
