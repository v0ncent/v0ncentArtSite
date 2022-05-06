import { Box, Paper, Typography } from "@mui/material";

// Importing needed components
import MenuComponent from "../menuComponent/MenuComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

function ForumPage() {
  return (
    <Box bgcolor="#000000" sx={{ p: 8 }}>
      <Paper sx={{ p: 5 }}>
        <HeaderComponent />
        <MenuComponent />
        <Typography>forumPage</Typography>
      </Paper>
    </Box>
  );
}

export default ForumPage;