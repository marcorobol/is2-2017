# Git

- On github.com create a github repository (with .gitignore)

- Clone repository in a local directory

  `git clone [repoAddress] [folderName]`

- Stage files

  `git add .`

- Check status

  `git status`

- Commit staged changes (-a: stage changed tracked files, -m: add message)

  `git commit -am "first commit"`

- Push changes to remote repository

  `git push`

- Modify files

- Create a new branch, commit and push

  `git branch newFunction`
  `git checkout newFunction`
  `git commit -am "commit in the new branch"`
  `git push origin newFunction`

- Hotfix: new branch from master

  `git status` (check everything is committed or pushed)
  `git checkout master` (and check that locally file has changed)
  `git branch hotFix`
  `git checkout hotFix`

- Modify files, commit and push

  `git commit -am "commit the hotfix"`
  `git push origin hotFix`

- Log of commits

  `git log`

- Modify files and check modification

  `git diff`
  `git diff master^^ index.js` (check with 3 REPO commits ago)
  `git diff <hash> index.js `
  `git diff master^^ master index.js `

- Check status and commit

  `git status`
  `git commit -am "hotfix 2"`
  `git push origin hotFix`

- merge hotFix with master

  `git checkout master`
  `git merge hotFix` (fast-forward)

- Delete hotFix branch

  `git branch -d hotFix` (delete local branch)
  `git push origin :[branch_name]`

- Go back to work in your local branch

  `git checkout newFunction`

- Check the difference with master

  `git diff master`

- We want the hotfix also in our branch

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
  
