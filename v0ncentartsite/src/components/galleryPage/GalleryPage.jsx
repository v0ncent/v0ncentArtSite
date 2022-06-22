// Importing React, needed components, and FileBase64 to convert an image to url
import TopNav from "../TopNav/TopNav";
import GalleryItems from "./GalleryItems";
import FileBase64 from "react-file-base64";
import { useState, useEffect } from "react";

/*
Dear @Jack, <-----
I created MongoGetter,
This is where pretty much everything needed to interact with
mongo is, just export the functions from it and hopefully it
works and if it doesnt fuck me.
 */
import { 
  getAllItems,  
  //these arent used but they are there to be used
  getOneItem,
  updateOneItem,
  deleteOneItem
} from "../../MongoGetter";

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
/*
Alright I got it jack ty :)
 */
  let dd = new Date();
  let year = dd.getFullYear();
  let month = dd.getMonth() + 1;
  let day = dd.getDate();

  dd = month +  '/' + day + '/' + year; 
  console.log(dd);

  const [uploadForm, setUploadForm] = useState({
    title: "",
    imageURL: "",
    datePosted: month +  '/' + day + '/' + year, //set field to dick date
  }); 

  const [imageData, setImageData] = useState([{}]); //create useState of an empty object to place hold for image data

  useEffect(() => {
    //get image data from mongo
    const myFunc = async () => {
      try {
        const data = await getAllItems();
        setImageData(data); //set image data
      } catch (error) {
        console.log(error);
      }
    };
    myFunc();
  }, []);

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
    const myFunc = async () => {
      try {
        const data = await getAllItems();
        setImageData(data); //set image data
      } catch (error) {
        console.log(error);
      }
    };
    myFunc();
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <TopNav />
      </Grid>

      <Grid item xs={12} sx={{ p: 4 }}>
        {/* TODO: add head title for gallery page called "The Gallery" (ill draw this) */}
        <Typography variant="h2">Gallery Vincent Drawing</Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={12}>
          <Accordion>
            <AccordionSummary
              id="panel1a-header"
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>upload new images</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: "5px" }}>
              <Typography>upload & title your work here</Typography>
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
      </Grid>

      {/*test rendering image data basically renders the array of all data so to access specific
        indexes use like image[0] or something idk how react works lol */}

      <Grid item xs={12}>
        <Grid item xs={4} sx={{ pt: 5 }}>
          {imageData.map((image, i) => {
            return GalleryItems(image, i);
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GalleryPage;
