import { Box, Paper, Typography } from "@mui/material";

// Importing needed components
import MenuComponent from "../menuComponent/MenuComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";


function GalleryPage() {
  return (
    <Box bgcolor="#000000" sx={{ p: 8 }}>
      <Paper sx={{ p: 5 }}>
        <HeaderComponent />
        <MenuComponent />
        {/* TODO: add head title for gallery page called "The Gallery" (ill draw this) */}
        <Typography>galleryPage</Typography>
      </Paper>
    </Box>
  );
}

export default GalleryPage;