import { useState, useEffect } from "react";
import mongoose from "mongoose";
import axios from 'axios';

export default function UploadTest() {
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ImgUp = new Schema({
  title: String,
  image: String,
});

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

    //create axios components
    const url = "http://localhost:5000/getAll";

    // get items function
    const getItems = ()=> axios.get(url);
  
    //---give this a shot jack------
    const getAllItems = async()=>{ //define getAllItems Function
      try{
        const data = getItems(); //create data variable that is our axios function
        return data.then(function(response){
          return response.data;  //return data feild of prmoised result of getItems function
        });
      } catch(error){
        console.log(error);
      }
    }

    //test function
    getAllItems();
    console.log(getAllItems());
  
  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      {imageURLs.map(imageSrc => <img src={imageSrc}/>)}
    </>
  );
}
