/*
--MONGO GETTER--
THESE FUNCTIONS CONNECT TO ROUTES AND CREATE A USABLE FUNCTION IN REACT

basically this is a bridge from backend routes to front end
 */

//TODO: make this universal for all database tables,(forum,comics,gallery,etc..) <=

import axios from "axios";
//Get All
//create axios components
const urlGetAll = "http://localhost:5000/getAll";

// get items function
const getAll = async ()=> await axios.get(urlGetAll);

//NOTE HERE THAT GETTING ALL WILL PULL ALL INFORMATION FROM DATABASE NOT JUST ONE BUT ALL OF THEM
//SO BE WARY FOR SURPLUS OF INFORMATION YOU MIGHT HAVE NOT EXPECTED
const getAllItems = async()=>{
   //define getAllItems Function
    try{
      const promise = await getAll(); //create data variable that is our axios function
      return promise.data;
      } catch(error){
        console.log(error);
      }
    }

export {getAllItems}; // export function

//Get One
const urlGetOne = "http://localhost:5000/getAll/:id";

const getOne = async ()=> await axios.get(urlGetOne);

const getOneItem = async()=>{
  try{
    const promise = await getOne();
    return promise.data;
  } catch(error){
    console.log(error);
  }
};

export {getOneItem};

//update one
const urlUpdateOne = "http://localhost:5000/update/:id";

const updateOne = async ()=> await axios.get(urlUpdateOne);

const updateOneItem = async()=>{
  try{
    const promise = await updateOne();
    return promise.data;
  } catch(error){
    console.log(error);
  }
};

export {updateOneItem};

//delete one
const urlDeleteOne = "http://localhost:5000/:/id";

const deleteOne = async ()=> await axios.get(urlDeleteOne);

const deleteOneItem = async()=>{
  try{
    const promise = await deleteOne();
    return promise.data;
  } catch(error){
    console.log(error);
  }
};

export {deleteOneItem};