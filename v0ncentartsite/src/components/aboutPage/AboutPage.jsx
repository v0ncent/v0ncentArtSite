import { Box, Paper, Typography } from "@mui/material";

// Importing needed components
import TopNav from "../TopNav/TopNav";

function AboutPage() {
  return (
    <>
      <TopNav />
      <Typography variant="h2" textAlign={"center"} sx={{ p: 4 }}>
        About V0ncent
      </Typography>
      <Box sx={{ p: 4 }} textAlign={"left"}>
        <Typography variant="h4">
          {/* TODO: add a image for self portrait next to bio */}
          Hello! My name is Vincent Banks, I am a self taught artist and
          computer programmer. I enjoy creating grotesque style pieces and
          comics. You can check out my other links below to see more of my work!
          <br />I hope this site finds you well and you have enjoyed a platform
          to share your work!
        </Typography>
        <Typography variant="h4" sx={{ pt: 4 }}>
          GitHub:{" "}
          <a href="https://github.com/v0ncent" target="_blank" rel="noreferrer">
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
      <Paper elevation={5}>
        <img
          src="./selfPortrait.jpg"

          alt="Self portrait of V0ncent (he looks disheveled). 
          Text reads 'what I look like 90% of the time'"
        />
      </Paper>
    </>
  );
}

export default AboutPage;
