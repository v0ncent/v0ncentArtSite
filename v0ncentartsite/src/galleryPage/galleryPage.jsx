import { Box, Paper, Typography } from "@mui/material";
import MenuComponent from "../MenuComponent/MenuComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";


function GalleryPage() {
  return (
    <Box bgcolor="#000000" sx={{ p: 8 }}>
      <Paper sx={{ p: 5 }}>
        <HeaderComponent />
        <MenuComponent />
        <Typography>galleryPage</Typography>
      </Paper>
    </Box>
  );
}

export default GalleryPage;
