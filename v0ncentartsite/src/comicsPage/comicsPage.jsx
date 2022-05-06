import { Box, Paper, Typography } from "@mui/material";
import MenuComponent from "../menuComponent/MenuComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

function ComicsPage() {
  return (
    <Box bgcolor="#000000" sx={{ p: 8 }}>
      <Paper sx={{ p: 5 }}>
        <HeaderComponent />
        <MenuComponent />
        <Typography>comicsPage</Typography>
      </Paper>
    </Box>
  );
}

export default ComicsPage;
