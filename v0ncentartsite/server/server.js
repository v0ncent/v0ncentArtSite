const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "../config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// get driver connection
const dbo = require("./db/conn");

//set up new routes for app to use
const router = express.Router();


//Function for building all routes
function buildRoutes(){
  //galleryPage
  app.use(require("./routes/galleryRoutes"));

}

app.listen(port, () => {
  buildRoutes(); //build express routes
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
