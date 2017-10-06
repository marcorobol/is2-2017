# Heroku

Platform as a service (PaaS)

## Getting Started on Heroku with Node.js:

Taken from: https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

Create an app
- `git init`
- `heroku create example`

Upload on heroku
- `git push heroku master`

Scale the app (set to 1 to run; set to 0 to stop):
- `heroku ps:scale web=1`

Open app in the browser:
- `heroku open`

View logs:
- `heroku logs --tail`

Create a file called `Procfile` to let Heroku know how to start the app:
- `web: node index.js`

heroku local web

## Config variables

Config:
- set: `heroku config:set TIMES=2`
- read: `heroku config`
- values stored in file .env: `TIMES=2`

From a Node.js app read config value, e.g. TIME, by calling:
- `process.env.TIMES`


