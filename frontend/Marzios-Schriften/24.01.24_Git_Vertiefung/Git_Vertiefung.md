1. Branches anlegen und wechseln

   1. **git branch** -> Zeigt alle vorhanden branches an. (\* ist wo man sich gerade befindet)
   2. **git branch BurgerMenu** -> legt einen neune branch an.
   3. **git checkout BurgerMenu** -> wechselt zu einen neuen branch
   4. **git checkout -b BurgerMenu2** -> legft einen neune branch BurgerMenu2 an und wechselt dahin
   5. **git branch -d BurgerMenu2** -> Löscht den branch BurgerMenu2

2. Ablauf eines Merges (Zusammenführung zweier branches.)

   1. **git checkout main** -> Wechselt zum main branch (Davor muss man sich auf den main branch befinden)
   2. **git merge BurgerMenu** -> Versucht den main Branch mit den BurgerMenu Branch zusammenzuführen
   3. a. **git add .**
      b. **git commit -m "merge branch"**
      c. **git push**
   4. **git branch -d BurgerMenu** -> Löscht den branch

3. Commits zurück gehen
   1. **git log --oneline** -> id raussuchen wo man zurück will
   2. **git checkout 3290492 .** -> man geht auf den alten stand zurück
   3. **git add .**
   4. **git commit -m "back"**
   5. **git push**
   6. Done
