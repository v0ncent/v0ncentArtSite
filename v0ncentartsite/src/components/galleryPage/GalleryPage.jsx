// Importing React & site nav component
import { useState } from "react";
import TopNav from "../TopNav/TopNav";

// Importing needed MUI components
import {
  Box,
  Grid,
  Button,
  Accordion,
  TextField,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { styled } from "@mui/material/styles";
const Input = styled("input")({
  display: "none",
});

function GalleryPage() {
  const [uploadForm, setUploadForm] = useState({
    title: "",
    imgURL: "",
  });

  // function updateUploadForm(value) {
  //   return setUploadForm((prev) => {
  //     return { ...prev, ...value };
  //   });
  // }

  async function onSubmit(e) {
    e.preventDefault();
    console.log("poop");
  }

  return (
    <>
      {/* TODO: add head title for gallery page called "The Gallery" (ill draw this) */}
      <Grid container>
        <Grid item xs={12}>
          <TopNav />
        </Grid>

        <Grid item xs={12} sx={{ p: 4 }}>
          <Typography variant="h2">
            PLACEHOLDER 4 THE GALLERY Vincent Drawing
          </Typography>
        </Grid>

        <Accordion color="primary.main">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>upload here</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>upload & title your work here</Typography>
            <Grid item xs={12}>
              <Box component={"form"} onSubmit={onSubmit}>
                <TextField
                  id={"title"}
                  label="title"
                  variant="outlined"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ title: e.target.value })}
                />
                <br />
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  id="submit"
                  type="submit"
                >
                  submit
                </Button>{" "}
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button
                    id="imgURL"
                    type="file"
                    component="span"
                    variant="contained"
                    value={uploadForm.imgURL}
                    onChange={(e) => setUploadForm({ imgURL: e.target.value })}
                  >
                    Upload
                  </Button>
                </label>
              </Box>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Grid item xs={12}>
          <Typography>{uploadForm.title}</Typography>
          <Typography>{uploadForm.imgURL}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default GalleryPage;
