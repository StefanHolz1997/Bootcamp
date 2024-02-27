// # Staren einer React App
// https://vitejs.dev/guide/

// 1. npm create vite@latest
// 2. y -> eintippen um weiter zu machen
// 3. project-name erstellen (ohne leertaste / umlaute etc.)
// 4. react auswählen
// 5. JS auswählen
// 6. cd <projectname> //- navigiert in unserem react projekt rein
// 7. npm install //- installiert alle pakete die für react benötigt werden
// 8. npm run dev //- Startet das Projekt

// # Ordnerstruktur in React

// node_moudles //- dort befinden sich alle Pakete die für react benötigt werden (wir können auch pakete zusätzlich installieren)

// public //- dort werden alle dateien gespeichert die unverändert ausgegeben werden (=> bilder, fonts)

// src //- hier werden wir 90% unserer zeit verbringen. Hier Programmieren wir. In der regel erstellen wir in dem "src" ordner nochmal 2 ordner mit "pages" & "components"

// gitignore //- hier schreiben wir alles rein was nicht in github hochgeladen werden soll

// index.html //- ist der startpunkt von unserer app. In unserem div mit der id "root" wird alles reingerendert

// package-lock.json //- Hier befinden sich alle benötigten npm pakete inkl version

// package.json //- hier befinden sich infos über unsere app -> Name version etc.

// README.md //- Hier kommen Infos rein wie z.b. eine kleine Beschreibung zum Projekt / App

// vite.config.js //- hier können wir wite anpassen

// JSX = Jacascript Syntax Extension

// # App.css vs Index.css
// in die index.css kommen alle genrelle stylings wie Fontfamily h1-h6. In die App.css machen wir nur die styling für die page App.jsx

import "./App.css";
import Home from "./page/Home/Home";

function App() {
  return <Home />;
}

export default App;
