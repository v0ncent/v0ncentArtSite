import { Typography } from "@mui/material";
import { Box, Grid, TextField, Button } from "@mui/material";

// Importing needed components
import TopNav from "../TopNav/TopNav";

import { styled } from "@mui/material/styles";
const Input = styled("input")({
  display: "none",
});


function GalleryPage() {
  return (
    <>
      <TopNav />
      {/* TODO: add head title for gallery page called "The Gallery" (ill draw this) */}
      <Grid container sx={{ p: 4 }}>
        <Box component={"form"}>
          <Grid item xs={12}>
            <Typography>upload & title your work here</Typography>
            <TextField label="Title" variant="outlined" />
            <br />
            <br />
            <Button variant="contained" color="secondary">
              submit
            </Button>
            <br />
            <br />
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
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default GalleryPage;
