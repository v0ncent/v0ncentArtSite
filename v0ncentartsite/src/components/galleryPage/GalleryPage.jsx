// Importing React, needed components, and FileBase64 to convert an image to url
import TopNav from "../TopNav/TopNav";
import FileBase64 from "react-file-base64";
import { useEffect, useState } from "react";

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
//GalleryMongo file imports
/*
DEAR JACK
The below imports are from a file called Gallery Mongo,
This file basically houses all functions needed for querying gallery table in site db,
it also houses all the routes as constants.
check it out and you should see what I mean.
The purpose of this file is to act as a handshake from the backend to the front end and
supposed to give you easy access to the data in a easy to manipulate form.
*/
import { 
  CREATE_LISTING_ROUTE, //<------- import gallery mongo data
  deleteOne,
  getAll,
  getOne
} from "./GalleryMongo"
function GalleryPage() {

  let dd = new Date();
  let year = dd.getFullYear();
  let month = dd.getMonth() + 1;
  let day = dd.getDate();

  dd = month +  '/' + day + '/' + year; 

  const [uploadForm, setUploadForm] = useState({
    title: "",
    imageURL: "",
    datePosted: dd, //<-- this shit be workin now hehe
  });

  async function onSubmit(e) {
    e.preventDefault();

    const newImage = { ...uploadForm };

    await fetch(CREATE_LISTING_ROUTE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newImage),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    if (uploadForm.imageURL != null) {
      try {
        setUploadForm({title: "", imageURL: "", datePosted: dd});
        console.log("poop", uploadForm);
      } catch (error) {
        window.alert(error);
        return;
      }
    } else {
      window.alert("You must provide and image to upload.");
    }
  }

  //----REMEMBER TO DELETE THIS ONCE GALLERY IS COMPLETED----
  //using a use effect so whenever component is rendered it logs all data in console
  useEffect( () => { 
    getAll() //you would not beleive how long it took me to figure out how to do this lmfao
    .then(data => console.log(data))
  },[])

  return (
    <Grid container>
      <Grid item xs={12}>
        <TopNav />
      </Grid>

      <Grid item xs={12} sx={{ p: 4 }}>
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
                      setUploadForm({ ...uploadForm, imageURL: base64, datePosted: dd })
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
    </Grid>
  );
}

export default GalleryPage;
