// Code reference from MongoDB documentation. The Route methods themselves are edited.
const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const DB = require("../db/Database"); // Databasefile
const dbo = new DB;    // create actual dbo from object
 

// A test method to pings server
// This will be our command interface using routers. We will instead use this to middleman the frontend to the backend.
// Works as intended
recordRoutes.route("/ping").get(async function (req, response)  
{  
    var ping_res = await dbo.ping();
    if(ping_res == true)
        console.log("Successful Router Connection from React Server");
    else
        console.log("Failed Router Connection from React Server");

    response.json("Server Successfully Pinged");
});

recordRoutes.route("/login/:username-:password").get(async function (req, response)   // This will be our command interface using routers. We will instead use this to middleman the frontend to the backend.
{   
   var un = req.params.username;
   var pw = req.params.password;
   console.log("Recieved Username: " + un + " and Password: " + pw);
   try
   {
      var userdata = await dbo.login(un,pw);   // Login the user and get their name returned or -1 if no name
      if(userdata)   // If valid data
         JSON.stringify(userdata);   // Turn it into json 
      response.json(userdata);       // Return it
   }
   catch(err)
   {
      console.log(err);
      response.json("Error");        // Return an error instead
   }

});

recordRoutes.route("/fetch").get(async function (req, response)   // This will be our command interface using routers. We will instead use this to middleman the frontend to the backend.
{   
   try
   {
      lotdata = await dbo.fetchLotData();
      console.log(lotdata);
      if(lotdata)   // If valid data
         JSON.stringify(lotdata);
      response.json(lotdata);
   }
   catch(err)
   {
      response.json("Error");
      res = false;
   }
});

module.exports = recordRoutes;