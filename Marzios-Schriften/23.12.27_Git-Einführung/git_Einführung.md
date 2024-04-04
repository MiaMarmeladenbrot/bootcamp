1. Git vorteile

   - Daten sind immer gesichert
   - Zusammenarbeit möglich
   - Direkt verbindung mit VS Code
   - wir können auf alte versionen zugreifen

2. Wie erstelle ich ein Repo

   - auf das + Icon klicke
   - Owner, Title & Decription hinzufügen
   - privat vs public

   0. **WICHTIG** : Erst Ordner in VS reinziehen dann erst eingeben!!!

   1. git init ---> Initialisiert ein neues Git Reposetory im akutellen Verzeichnis.
   2. git add README.md ---> (option) Fügt eine README.md datei hinzu
   3. git commit -m "first commit" ---> Eestellt ein neuen Commit mit dem Kommentar "first commit" der alle änderung im Ordner speichert
   4. it branch -M main ---> Bennnen den aktuellen Branch in "main" um. War früher "master"
   5. git remote add origin https://github.com/MarzioCostantini/testgit.git ---> Fügt einen neuen Remote Reposetory hinzu mit den Namen "origin"
   6. git push -u origin main ---> Lädt alle lokalen Commits auf des Remote-Reposetory names "origin" hoch und legt main als Standart Branch fest. Das "-u" argument gibt an, das der lokales Branch beim nächstne mal, wenn "git push" ausgeführt wird, automatisch mit dem Remote Reposetory Synchronisiert wird.

3. Befehle in Github Basic

   1. **git add .**-> fügt eine Änderung aus den Arbeitsverzeichnis zu Staging-area hinzu.
   2. git add _FILENAME_ -> hier kann man auch nur eine Datei in die Staging-area hinzufügen.
   3. **git commit -m "Text was geändert wurde"** -> erstellt einen neune commit mit einer Nachricht "Text was geändert wurde"
   4. **git push** -> ladet die dateien die zuvor mit " git add . " in die staging area bewegt worden sind in das Github Repo
   5. git log -> hier kann ich mir alle Commits angucken die gemacht worden sind (mit "q" kann ich die Ansicht verlassen)
   6. git status -> hier kann ich sehen welche datei veränder worden sind
   7. git pull -> Mit "git pull" lade ich die geänderten datein herunter

4. Git in VS Code einrichten.

   1. Git runterladen -> https://git-scm.com/downloads
   2. git --version schauen ob es da ist
   3. git config --global user.name "YOUR_USERNAME"
   4. git config --global user.email "im_satoshi@musk.com"
   5. git config --global --list -> To check the info you just provided
