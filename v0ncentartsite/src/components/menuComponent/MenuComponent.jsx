// MUI Imports
import { Box } from "@mui/material";
import { Grid, Divider, Button } from "@mui/material";

// Import navigation
import { useNavigate } from "react-router-dom";

function MenuComponent() {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 1, border: 1 }}>
      <Grid container>
        <Grid item xs={2.75} textAlign={"center"}>
          <Button onClick={() => navigate("/comics")}>Comics</Button>
        </Grid>

        <Grid item xs={0.33}>
          <Divider orientation="vertical" />
        </Grid>

        <Grid item xs={2.75} textAlign={"center"}>
          <Button onClick={() => navigate("/gallery")}>Gallery</Button>
        </Grid>

        <Grid item xs={0.33}>
          <Divider orientation="vertical" />
        </Grid>

        <Grid item xs={2.75} textAlign={"center"}>
          <Button onClick={() => navigate("/forum")}>Forum</Button>
        </Grid>
        <Grid item xs={0.33}>
          <Divider orientation="vertical" />
        </Grid>

        <Grid item xs={2.75} textAlign={"center"}>
          <Button onClick={() => navigate("/about")}>About</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MenuComponent;
