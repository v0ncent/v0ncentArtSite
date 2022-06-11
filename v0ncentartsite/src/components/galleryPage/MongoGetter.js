import axios from "axios";
//Get All
//create axios components
const urlGetAll = "http://localhost:5000/getAll";

// get items function
const getAll = async ()=> await axios.get(urlGetAll);
  
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