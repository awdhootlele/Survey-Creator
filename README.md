## HEROKU Deployment checklist : 

1. #### Dynamic port binding
    Heroku will tell us which port to use (env.PORT), so we should use that port (If present), else fallback to dev env port
1. #### Specify Node Environment
    We need to tell Heroku which version of Node we want to use for our app.
    We specify MAIN command in our package.json, Heroku will look it up.
1. #### Specify start script
    Instruct Heroku what command to run to start our server running
1. #### Create .gitignore file
    We dont want to include dependencies, Heroku will do that for us.