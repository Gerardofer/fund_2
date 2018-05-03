# 05/01/2018

## Backend architecture

* first we need to create the server folder and add the package.json file as well as the file that will host all the server logic. All these files need to be inside the server folder -- VERY IMPORTANT -- .

* The only dependency needed is Express (thus far).

* Once the server has been created and a route has been created, we deploy to Heroku. For that we need to add the following configuration to the package.json file:
  * Specify the version of Node and Npm that will be used by Heroku when deployed "engines": {"node": "9.11.1", "npm": "5.6.0"}
  * Go to the scripts sections and set the starting command so that heroku knows what to run. Replace the "test" block with "start": "node <fileName>"
  * Create a .gitignore file to store the node_modules files so that they aren't included in the git updates.
  * Install nodemon and add a "dev" property in the package.json file with the key value of "nodemon index.js". To start the server from then on use 'npm run dev'

# 05/02/2018

## Google Authentication!!

* The first step is to install the passport library with the google Strategy. (The two libraries are passport passport-google-oauth20).
* at first write the auth logic in the server index file. Later those blocks of code will be distributed to other files.

### Working in the index.js file

* Require passport and GooglePassportStrategy
* Write the passport set up for the google Strategy
* parallel to the passport set up, register the app with the google api so that the routes can correctly use it and make the api calls to google. Make sure to retreive the credentials for the api calls
* Copy the client ID and client Secret
* Create a config directory and keys.js file inside
  * The keys.js file will have all the credentials for the app. This file will not be deployed to github, so it needs to be added to the .gitignore file.
* Pass both keys to the passport.use function as an object, and as a last property provide a callback route where the user will be redirected after they have being loggedin.

### Create the auth route for passport

* create the route that will tell passport to take over and pass the request to Google so that the user can be authenticated. Make sure to pass the passport.authenticate argument, and pass two arguments to that function ('google', and an object that will have the user's account, the object will have a property of scope:['profile', 'email']). This should work enough to produce a callback from google.
* The next steps are to set up the google api with the urls, so that google knows where to navigate.
* Create the route for the callback function to be used by google, and use passport to handle the request to get the data back (app.get("/auth/google/callback", passport.authenticate("google"));. This route will return the token needed for us to save to the database (later).
* the full parameters for the new GoogleStrategy are (accessToken, refreshToken, profile, done).
* The last step is to create the files that will host the refactored code.

### End of the auth first part.

# Database setup!
