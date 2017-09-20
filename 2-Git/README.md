# Git (https://git-scm.com/docs)

- On github.com create a github repository (with .gitignore)

- Clone repository in a local directory

  `git clone [repoAddress] [folderName]`

- Stage files

  `git add .`  

- Check status

  `git status`

- Commit staged changes

  (-m: add message)  
  (-a: stage changed tracked files, but in case you have new files you need to manually track them `git add .`)  
  `git commit -am "first commit"`

- Push changes to remote repository

  `git push`

- Modify files then create a new branch, stage and commit changes, and push to remote repository

  `git branch newFunction`  
  `git checkout newFunction`  
  `git commit -am "commit in the new branch"`  
  `git push origin newFunction`

- Hotfix: new branch from master

  `git status` (check everything is committed or pushed)  
  `git checkout master` (and check that locally file has changed)  
  `git branch hotFix`  
  `git checkout hotFix`  
  Modify files  
  `git commit -am "commit the hotfix"`  
  `git push origin hotFix`

- Log of commits

  `git log`

- Check modification

  Modify files  
  `git diff`  
  `git diff master^^ index.js` (check with 3 REPO commits ago)  
  `git diff <hash> index.js `  
  `git diff master^^ master index.js `  
  `git status`  
  `git commit -am "hotfix 2"`  
  `git push origin hotFix`

- Merge branch with master

  `git checkout master`  
  `git merge hotFix` (fast-forward)

- Check with gitk

  `gitk`

- Delete branch

  `git branch -d hotFix` (delete local branch)  
  `git push origin :[branch_name]`

- Switch to local branch

  `git checkout newFunction`

- Check the difference with master and merge

  `git diff master`  
  `git merge master`

- Modify files, commit changes and push

  `git commit -am "new function 2"`  
  `git push origin newFunction`

- Merge

  `git checkout master`  ()Your branch is ahead of : perche' abbiamo fatto il merge dall'altra parte) [ignorare]  
  `git merge newFunction`

- Delete branch

  `git branch -d newFunction`

- Check status

  `git status`  
  `git push origin master` (se e' ancora avanti)
  
