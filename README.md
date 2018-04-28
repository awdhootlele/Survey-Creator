# Heroku Deployment checklist : 

1. #### Dynamic port binding
    Heroku will tell us which port to use (env.PORT), so we should use that port (If present), else fallback to dev env port
1. #### Specify Node Environment
    We need to tell Heroku which version of Node we want to use for our app.
    We specify MAIN command in our package.json, Heroku will look it up.
1. #### Specify start script
    Instruct Heroku what command to run to start our server running
1. #### Create .gitignore file
    We dont want to include dependencies, Heroku will do that for us.


# First time deployment steps - 

1. Create Heroku account
1. Commit out codebase to git
1. Install Heroku CLI and create app
1. Deploy App with Git
1. Heroku deploys the project.

# Subsequent Deployment steps - 

1. Commit Codebase with Git
1. Deploy App With Git