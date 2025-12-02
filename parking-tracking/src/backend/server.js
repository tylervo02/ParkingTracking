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

app.listen(port, () => 
{
    console.log(`Server is running on port: ${port}`);
});