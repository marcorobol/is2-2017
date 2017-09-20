- create github repository (with .gitignore)

- clone repo
git clone <repoAddress> <folderName>

- add filed
git add .

- status
git status

- commit (-a: commit all versione files, -m: add message)
git commit -am "first commit"

- local repo

- push
git push

- origin master
more .git/config 

- create a branch
git branch newFunction
git checkout newFunction

- git status to check the new branch

- modify file, commit changes, push
git commit -am "commit in the new branch"
git push origin newFunction

- github, visualize new branch

- hotfix : new branch from master
git status (check everything is committed or pushed)
git checkout master (and check that locally file has changed)
git branch hotFix
git checkout hotFix

- modify files

- commit and push
git commit -am "commit the hotfix"
git push origin hotFix

- log of commits 
git log

- modify files

- check modification
git diff
git diff master^^ index.js (check with 3 REPO commits ago)
git diff <hash> index.js 
git diff master^^ master index.js 

- status and commit
git status
git commit -am "hotfix 2"
git push origin hotFix

- merge hotFix with master
git checkout master
git merge hotFix (fast-forward)

- delete hotFix branch
git branch -d hotFix

- go back to work in your local 
git checkout newFunction

- we want to check the difference with master 
git diff master

- we want the hotfix also in our branch
git merge master

- modify files

- commit changes
git commit -am "new function 2"

- push
git push origin newFunction

- merge
git checkout master  ()Your branch is ahead of : perche' abbiamo fatto il merge dall'altra parte) [ignorare]
git merge newFunction

- delete branch
git branch -d newFunction

-controllare status
git status
git push origin master (se e' ancora avanti)