import { Box, Grid, Typography } from "@mui/material";

function announcementsPage() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Box>
            <Typography textAlign={"left"} variant="h2">Announcements!</Typography>
          </Box>
        </Grid>
      </Grid>
    );
}

export default announcementsPage;