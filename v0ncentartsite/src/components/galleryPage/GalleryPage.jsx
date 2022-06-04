// Importing React, site nav component, and FileBase64 to convert an image to url
import { useState, useEffect } from "react";
import TopNav from "../TopNav/TopNav";
import FileBase64 from "react-file-base64";
import { getAllItems } from "./getGalleryItems";

// Importing needed MUI components & icon
import {
  Box,
  Grid,
  Paper,
  Button,
  Accordion,
  TextField,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function GalleryPage() {
  const [uploadForm, setUploadForm] = useState({
    title: "",
    imageURL: "",
  });
  const [imageData,setImageData] = useState([{}]); //create useState of an empty object to place hold for image data
  async function onSubmit(e) {
    e.preventDefault();
    const newImage = { ...uploadForm };
    await fetch("http://localhost:5000/addToGallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newImage),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    // if (uploadForm.imageURL != null) {
    //   try {
    //     setUploadForm({ title: "", imageURL: "" });
    //     console.log("poop", uploadForm);
    //   } catch (error) {
    //     window.alert(stringify(error));
    //     return;
    //   }
    // } else {
    //   window.alert("You must provide and image to upload.");
    // }
  }

  useEffect(()=>{ //get image data from mongo
    const myFunc = async ()=>{
      try{
        const data = await getAllItems();
        setImageData(data); //set image data
      }catch(error){
        console.log(error);
      }
    }
    myFunc();
  },[]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <TopNav />
      </Grid>

      <Grid item xs={12} sx={{ p: 4 }}>
        {/* TODO: add head title for gallery page called "The Gallery" (ill draw this) */}
        <Typography variant="h2">
          PLACEHOLDER 4 THE GALLERY Vincent Drawing
        </Typography>
      </Grid>

      <Paper elevation={12}>
        <Accordion>
          <AccordionSummary
            id="panel1a-header"
            aria-controls="panel1a-content"
            expandIcon={<ExpandMoreIcon />}
            // sx={{ backgroundColor: "gray" }}
          >
            <Typography>upload here</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: "5px" }}>
            <Typography>upload & title your work here</Typography>
            {/* <Grid item xs={12}>
                <TextField
                  required
                  id={"title"}
                  label="title"
                  variant="outlined"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ title: e.target.value })}
                />
              </Grid> */}
            <Box component={"form"} onSubmit={onSubmit}>
              <Grid item xs={12}>
                <TextField
                  required
                  id={"title"}
                  label="title"
                  variant="outlined"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ title: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 4 }}>
                <FileBase64
                  type="image"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setUploadForm({ ...uploadForm, imageURL: base64 })
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  id="submit"
                  type="submit"
                  sx={{ mt: 5 }}
                  color="primary"
                  variant="contained"
                >
                  submit
                </Button>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Paper>
      {/*test rendering image data

      basically renders the array of all data

      so to access specific indexes use like
      
      image[0] or something idk how react works lol
      
      */}
      {imageData.map((image)=>{
        return (
          <>
            <p
            style={
              {
                padding: "5px",
              }
            } 
            >{image.title}</p>
            <img src={image.imageURL}>
              
            </img>
          </>
        )
      })}
    </Grid>
  );
}

export default GalleryPage;
