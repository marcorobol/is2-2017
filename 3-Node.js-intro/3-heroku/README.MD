# Heroku

Platform as a service (PaaS)

## Getting Started on Heroku with Node.js:

Taken from: https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

Create an app
- `git init`
- `npm init`
- `npm install express --save`
- `heroku create example`

Create a file called `Procfile` to let Heroku know how to start the app:
- `web: node index.js`

Upload on heroku
- `git add all`
- `git commit -m'first commit'`
- `git push heroku master`

Scale the app (set to 1 to run; set to 0 to stop):
- `heroku ps:scale web=1`

Open app in the browser:
- `heroku open`

View logs:
- `heroku logs --tail`

Run app locally
- `heroku local web`

## Config variables

Config:
- set: `heroku config:set PORT=80`
- read: `heroku config`
- values stored in file .env: `PORT=80`

From a Node.js app read config value, e.g. PORT, by calling:
- `process.env.PORT`


