## Online Survey Creator Application 

Generate simple surveys by logging in to the application and purchasing credit points to send out survays to any number of recipients you want. This application is created as a part of learning [react with nodejs](https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/content).

Application also displays the overview of generated surveys on the dashboard.

## [Demo](https://obscure-ocean-89464.herokuapp.com/)

## Technologies used

* React + Redux : Front End
* NodeJS : Back end
* MongoDB : Database
* Heroku-cli and heroku : Deployment and hosting



## Steps to locally run the application 

* After cloning the application, do `npm install` in 'server' and 'client' directories (nodeJS version 8.11.1 or higher is preferred)
* Create new dev.js file inside config folder (prod.js file for production config). Refer .example file for more details
* To enable OAuth (with google), create account on google dev console and generate API keys (for google+ API)
* To enable stripe payments, create new stripe account and add stripe keys to the config/dev.js file
* Create mongodb instance on mLab and provide its URL inside dev/prod configs
* To enable emails feature, create free sendGrid account and create API key and set it in dev/prod configs. Also, to receive feedack data, you will need to register the webhook inside sendGrid (URL is the url that localTunnel produces. Look into sendgrid_webhook.sh file for the subdomain URL)
* Run the script `npm run dev` to access the application on `localhost:3000`



This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Available Scripts On Server Side

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Available Scripts On Client Side

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.





 ## Heroku Deployment checklist : 

1. #### Dynamic port binding
    Heroku will tell us which port to use (env.PORT), so we should use that port (If present), else fallback to dev env port
1. #### Specify Node Environment
    We need to tell Heroku which version of Node we want to use for our app.
    We specify **engines** command in our package.json, Heroku will look it up.
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