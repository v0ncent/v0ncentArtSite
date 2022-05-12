import { Box, Grid, Paper, Typography } from "@mui/material";

// Importing needed components & images
import TopNav from "../TopNav/TopNav";
import SelfPortrait from "../aboutPage/selfPortrait.jpg";

function AboutPage() {
  return (
    <>
      <TopNav />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2" textAlign={"center"} sx={{ p: 4 }}>
            About V0ncent
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ pb: 4 }} textAlign={"left"}>
            <Typography>
              {/* TODO: add a image for self portrait next to bio */}
              Hello! My name is Vincent Banks, I am a self taught artist and
              computer programmer. I enjoy creating grotesque style pieces and
              comics. You can check out my other links below to see more of my
              work!
              <br />I hope this site finds you well and you have enjoyed a
              platform to share your work!
            </Typography>
            <Typography sx={{ pt: 4 }}>
              GitHub:{" "}
              <a
                href="https://github.com/v0ncent"
                target="_blank"
                rel="noreferrer"
              >
                v0ncent
              </a>
              <br />
              Instagram:{" "}
              <a
                href="https://instagram.com/v0ncent?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                @v0ncent
              </a>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={12}>
            <img
              width="100%"
              height="100%"
              src={SelfPortrait}
              alt="Self portrait of Vincent (he looks disheveled). Text reads 'what I look like 90% of the time'"
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutPage;
