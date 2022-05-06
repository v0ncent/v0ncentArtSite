import { Grid, Typography } from "@mui/material";

//Import react
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
     const navigate = useNavigate();
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            textAlign={"left"}
            onClick={() => navigate("/")}
          >
            V0ncent Art Site
          </Typography>
        </Grid>
      </Grid>
    );
}

export default HeaderComponent;