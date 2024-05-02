1. Git Vorteile

   - Daten sind immer gesichert, weil sie in die Cloud gepushed wurden (pushen = hochladen)
   - Zusammenarbeit an Code ist möglich
   - direkt verbinden mit VS Code
   - Seiten live schalten
   - alte Versionen bleiben trotzdem gespeichert, so können neue Funktionen problemlos getestet werden
   - man kann über einen zusätlichen Branch zum Main Branch ungefährlich neue Funktionen und Wege ausprobieren

2. Wie erstelle ich ein Repo?

   1. auf das Plus Icon klicken
   2. Owner, Title und Description hinzufügen
   3. private oder public einstellen
   4. Create repository
   5. Code kopieren
      - git init --> initialisiert ein neues Git Repository im aktuellen Verzeichnis
      - git add README.md --> optional; fügt eine readme-Datei hinzu
      - git commit -m "first commit" --> erstellt ein neuen Commit mit dem Kommentar "first commit", der alle Änderungen im Ordner speichert
      - it branch -M main --> Benennt den aktuellen Branch in main um (hieß früher Master)
      - git remote add origin https://github.com/MarzioCostantini/testgit.git --> fügt einen neuen Remote Repository hinzu mit dem Namen "origin"
      - git push -u origin main --> lädt alle lokalen Commits auf das Remote-Repository namens "origin" hoch und legt main als Standard Branch fest. Das "-u"-Argument gibt an, dass der lokale Branch beim nächsten Mal, wenn "git push" ausgeführt wird, automatisch mit dem Remote Repository synchronisiert wird.
   6. **Wichtig:** erst neuen Ordner erstellen und in VS öffnen
   7. in der Leiste oben über Terminal und dort neues Terminal öffnen
   8. Code bei diesem Ordner ins VS Terminal einfügen

3. Befehle
   - git add . --> fügt eine Änderung aus dem Arbeitsverzeichnis zur staging-area hinzu (Bereich, bevor es hochgeladen wird)
   - git add _FILENAME_ --> fügt nur eine bestimmte Datei zur staging-area hinzu
   - git commit -m "Text" --> erstellt einen neuen commit mit einer Nachricht, die kurz und auf Englisch erklärt, was geändert wurde
   - git push --> lädt die Dateien aus der staging-area hoch
   - git log --> zeigt Historie (sämtliche commits) meines aktuellen Repositorys
   - git status --> zeigt mir aktuelle Änderungen, die noch nicht hochgeladen sind im Repository (mit q kann ich die Ansicht verlassen)
   - git pull --> lädt die geänderten Dateien herunter
