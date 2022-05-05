import { Box, Paper, Typography } from "@mui/material";
import MenuComponent from "../MenuComponent/MenuComponent";
//Import react
import { useNavigate } from "react-router-dom";

function GalleryPage() {
    const navigate = useNavigate();
  return (
    <Box bgcolor="#000000" sx={{ p: 8 }}>
      <Paper sx={{ p: 5 }}>
        <Typography onClick={() => navigate("/")}>galleryPage</Typography>
        <MenuComponent />
      </Paper>
    </Box>
  );
}

export default GalleryPage;
