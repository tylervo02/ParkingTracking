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
recordRoutes.route("/ping").get(async function (req, res)  
{  
    var res = await dbo.ping();
    if(res == true)
        console.log("Successful Router Connection from React Server");
    else
        console.log("Failed Router Connection from React Server");
});

module.exports = recordRoutes;