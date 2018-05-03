# 05/01/2018

## Backend architecture

* first we need to create the server folder and add the package.json file as well as the file that will host all the server logic. All these files need to be inside the server folder -- VERY IMPORTANT -- .

* The only dependency needed is Express (thus far).

* Once the server has been created and a route has been created, we deploy to Heroku. For that we need to add the following configuration to the package.json file:
  * Specify the version of Node and Npm that will be used by Heroku when deployed "engines": {"node": "9.11.1", "npm": "5.6.0"}
  * Go to the scripts sections and set the starting command so that heroku knows what to run. Replace the "test" block with "start": "node <fileName>"
  * Create a .gitignore file to store the node_modules files so that they aren't included in the git updates.

# 05/02/2018

## Google Authentication!!

* The first step is to install the passport library with the google Strategy. (The two libraries are passport passport-google-oauth20).
* at first write the auth logic in the server index file. Later those blocks of code will be distributed to other files.

### Working in the index.js file

* Require passport and GooglePassportStrategy
* Write the passport set up for the google Strategy
* parallel to the passport set up, register the app with the google api so that the routes can correctly use it and make the api calls to google.
