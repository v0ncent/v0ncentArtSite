// Importing React, site nav component, and FileBase64 to convert an image to url
import { useState } from "react";
import TopNav from "../TopNav/TopNav";
import FileBase64 from "react-file-base64";

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

  async function onSubmit(e) {
    e.preventDefault();
    setUploadForm({ title: "", imageURL: "" });
    console.log("poop", uploadForm);
  }

  return (
    <>
      <TopNav />
      <Grid container>
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

              <Box component={"form"} onSubmit={onSubmit}>
                <Grid item xs={12}>
                  <TextField
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
    </>
  );
}

export default GalleryPage;
