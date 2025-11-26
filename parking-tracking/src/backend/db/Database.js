// Database Object we will be using to hold the entire database for the server. This database will use a more grounded strcture so we can focus on design pattern implementation
const Lot = require("./Model/Lot");
const Space = require("./Model/Space");

class Database
{

    constructor()
    {

    }
    async ping()
    {
        console.log("Server Object Pinged!")
        return;
    }
}
module.exports = Database;