1.Branches anlegen und wechseln

**git branch** -> Zeigt alle vorhanden branches an. (\* ist wo man sich gerade befindet)
**git branch BurgerMenu** -> legt einen neune branch an.
**git checkout BurgerMenu** -> wechselt zu einen neuen branch
**git checkout -b BurgerMenu2** -> legft einen neune branch Burge

2.Ablauf eines Merges (Zusammenführung zweier branches.)

**git checkout main** -> Wechselt zum main branch (Davor muss man sich auf den main branch befinden)
**git merge BurgerMenu** -> Versucht den main Branch mit den BurgerMenu Branch zusammenzuführen
a. **git add** . b. **git commit -m "merge branch"** c. **git push**
**git branch -d BurgerMenu** -> Löscht den branch

3.Commits zurück gehen

**git log --oneline** -> id raussuchen wo man zurück will
**git checkout 3290492** . -> man geht auf den alten stand zurück
**git add .**
**git commit -m "back"**
**git push**
Done

4.Branch & Merge

**git log** -> Show all Commits in hte current Branch's history
**git diff** branchB...branchA -> Show the diff. of what is in branchA that is not in branchB

5.Temp. Commits

**git stash** -> Safe modified and staged changes
**git stash list** -> list stack-order of stashed file changes
**git stash pop** -> write working from top of stash stack
**git stash drop** -> discard the changes from top of stash stack
**git stash apply** -> Der aktuellste Stash wird applied
