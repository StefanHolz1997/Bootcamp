1.Git Vorteile
    - Daten sind immer gesichert
    - Zusammenarbeit möglich
    - Direkt verbindung mit VS Code
    - Wir können auf alte Versionen zugreifen

2.Wie erstelle ich ein Repo
    - auf das + Icon klicken
    - Owner, Title & Description hinzufügen
    - privat vs public

        0. Wichtig: Erst Ordner in VS reinziehen dann erst eingeben!!!
        1. git init ---> Initialisiert ein neues Git Reposetory im aktuellen Verzeichnis
        2. git add README.md ---> (option) fügt eine README.md datei hinzu
        3. git commit -m "first commit" ---> Erstellt ein neuen Commit mit dem Kommentar "first commit" der alle änderungen im Ordner speichert
        4. it branch -M main ---> Bennent den aktuellen Branch in "main" um. War früher "master"
        5. git remote add origin https://github.com/StefanHolz1997/test.git ---> Fügt einen neuen Remote Reposetory hinzu mit dem Namen "origin"
        6. git push -u origin main ---> Lädtalle lokalen Commits auf das Remote-Reposetory namens "origin" hoch und legt main als Standart Branch fest. Das "-u" argument gibt an, das der lokale Branch beim nächsten mal, wenn "git push" ausgeführt wird, automatisch mit dem Remote reposetory Synchronisiert wird.

3. Befehle in Github Basic
    1. git add . -> fügt eine Änderung aus dem Arbeitsverzeichnis zu Staging-Area hinzu.
    2. git add _FILENAME_ -> hir kann man auch nur eine Datei in die Staging-Area hinzufügen.
    3. git commit -m "Text was geändert wurde" -> erstellt einen neuen commit mit einer Nachricht "Text was geändert wurde"
    4. git push -> lädt die Dateien die zuvor mit "git add. " in die staging-area bewegt worden sind, in das Github Repo
    5. git log -> hier kann ich mir alle Commits anschauen die gemacht worden sind (mit "q" kann ich die Ansicht verlassen.)
    6. git status -> hier kann ich sehen welche datei verändert worden ist.
    7. git pull -> Mit "git pull" lade ich die geänderten dateien herunter

