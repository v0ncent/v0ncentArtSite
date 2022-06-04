
import axios from "axios";
//create axios components
const url = "http://localhost:5000/getAll";

// get items function
const getItems = async ()=> await axios.get(url);
  
const getAllItems = async()=>{
   //define getAllItems Function
    try{
      const promise = await getItems(); //create data variable that is our axios function
      return promise.data;
      } catch(error){
        console.log(error);
      }
    }

export {getAllItems};
