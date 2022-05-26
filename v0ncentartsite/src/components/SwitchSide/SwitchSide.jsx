import { Link } from "react-router-dom";
import { Box, Grid, Paper, Typography } from "@mui/material";

export default function SwitchSide() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container spacing={2} rowSpacing={1}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ mb: 4 }}>
            Welcome!
          </Typography>
          <Typography>
            please choose what artist's site you'd like to see by clicking on
            their box
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Link to="/">
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                "&:hover": {
                  boxShadow: 15,
                },
                backgroundColor: "#b1b1b3",
              }}
            >
              <Typography>Vincent</Typography>
            </Paper>
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <Link to="/">
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                "&:hover": {
                  boxShadow: 15,
                },
                backgroundColor: "#b1b1b3",
              }}
            >
              <Typography>Emile</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
