# 05/01/2018

* first we need to create the server folder and add the package.json file as well as the file that will host all the server logic. All these files need to be inside the server folder -- VERY IMPORTANT -- .

* Once the server has been created and a route has been created, we deploy to Heroku. For that we need to add the following configuration to the package.json file:
  * Specify the version of Node and Npm that will be used by Heroku when deployed "engines": {"node": "9.11.1", "npm": "5.6.0"}
  * Go to the scripts sections and set the starting command so that heroku knows what to run. Replace the "test" block with "start": "node <fileName>"
  * Create a .gitignore file to store the node_modules files so that they aren't included in the git updates.
