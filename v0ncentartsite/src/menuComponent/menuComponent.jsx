import { Grid, Button } from "@mui/material";

function menuComponent() {
  return (
    <Grid container>
      <Grid item xs={3} textAlign={"center"}>
        <Button>Comics</Button>
      </Grid>

      <Grid item xs={3} textAlign={"center"}>
        <Button>Gallery</Button>
      </Grid>

      <Grid item xs={3} textAlign={"center"}>
        <Button>Forum</Button>
      </Grid>

      <Grid item xs={3} textAlign={"center"}>
        <Button>About</Button>
      </Grid>
    </Grid>
  );
}

export default menuComponent;
