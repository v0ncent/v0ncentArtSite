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
/*
How this works is pretty self explanitory, we are basically giving our express app multiple routes to use,
put them all into try catch blocks so if one fails to build only one subsection fails instead of whole database connection. 
*/
function buildRoutes(){
  //galleryPage
  try{
    app.use(require("./routes/galleryRoutes")); //<-- im getting a warning here, dont give in or it will fuck the whole script
    console.log("Succesfully built galleryRoutes")
  } catch (error){
    console.log(error)
  }
  //comicsPage
  try{
    app.use(require("./routes/comicRoutes"));
    console.log("Succesfully built comicRoutes")
  } catch (error){
    console.log(error)
  }
  //forumPage
  try{
    app.use(require("./routes/forumRoutes"));
    console.log("Successfully built forumRoutes")
  } catch (error){
    console.log(error)
  }
}

app.listen(port, () => {
  buildRoutes(); //build express
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
