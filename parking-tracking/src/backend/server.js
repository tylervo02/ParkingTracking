// server.js from MongoDB Documentation
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./router/record"));
// get driver connection
const DB = require("./db/Database"); // Databasefile
dbo = new DB;  // Create the object from alias

app.listen(port, () => 
{
    dbo.ping();
    console.log(`Server is running on port: ${port}`);
});