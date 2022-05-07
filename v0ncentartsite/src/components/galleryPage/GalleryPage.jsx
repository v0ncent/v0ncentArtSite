import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Box, Grid, TextField, Button, Stack } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Importing needed components
import TopNav from "../TopNav/TopNav";

import { styled } from "@mui/material/styles";
const Input = styled("input")({
  display: "none",
});

function GalleryPage() {
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
              <Box component={"form"}>
                <TextField label="title" variant="outlined" />
                <br />
                <br />
                <Button variant="contained" color="secondary">
                  submit
                </Button>
                {"  .  "}
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              </Box>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
}

export default GalleryPage;
