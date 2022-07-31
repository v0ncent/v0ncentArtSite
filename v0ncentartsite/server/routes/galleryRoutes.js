/*  Database methods
    This file is used to post, query, update, or delete records from database table galleryposts
*/
const express = require("express"); //create express variable that requires express library

/* recordRoutes is an instance of the express router.
 We use it to define our routes.
 The router will be added as a middleware and will take control of requests starting with path /record.
 Thank you tutorial information - vinny
 */
const recordRoutes = express.Router();

//define database constants
const db = "galleryInfo";
const collection = "galleryposts"

//connect to database using conn.js
const dataBaseObject = require("../db/conn"); // conn has what we need to connect to db

// functions for quality of life
getConnection = () => {
    return dataBaseObject.getDb(db)
};
getCollection = () => {
    return getConnection().collection(collection)
}; //get collection

//convert id to object id for finding record
const ObjectId = require("mongodb").ObjectId;  //requires mongodb library

//get all records
recordRoutes.route("/getAll").get(function (request, response) {
    getConnection(); //connect to database 
    getCollection() // get collection
        .find({}).toArray(function (error, result) {
        if (error) throw error; // if theres an error throw the error
        response.json(result); // return the results
    });
});

//get record by id
recordRoutes.route("/getAll/:id").get(function (request, response) {
    getConnection();
    let myquery = {_id: ObjectId(request.params.id)}; //define specific document we want to find
    getCollection
        .findOne(myquery, function (error, result) { //use findOne method to find single document
            if (error) throw error;
            response.json(result);
        });
});

//add new record to the gallery db
recordRoutes.route("/addToGallery").post(function (request, response) {
    getConnection();
    let myRecord = {
        imageURL: request.body.imageURL,
        title: request.body.title,
        date: request.body.datePosted,
    };
    getCollection().insertOne(myRecord, function (error, result) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            console.log("sucess");
        }
        response.json(result);
    })
});

//update a record by id
recordRoutes.route("/update/:id").post(function (request, response) {
    getConnection();
    let myquery = {id_: ObjectId(request.params.id)}
    let update = {
        $set: {
            imageURL: request.body.imageURL,
            title: request.body.title,
            date: request.body.datePosted,
        },
    };
});

//delete record by id
recordRoutes.route(":/id").delete((request, response) => {
    getConnection();
    let myquery = {_id: ObjectId(request.params.id)};
    getCollection.deleteOne(myquery, function (error, object) {
        if (error) throw error;
        console.log("one document deleted");
        response.json(obj);
    });
});

module.exports = recordRoutes;