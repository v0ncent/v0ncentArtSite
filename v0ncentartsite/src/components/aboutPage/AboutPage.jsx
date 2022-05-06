import { Box, Paper, Typography } from "@mui/material";

// Importing needed components
import MenuComponent from "../menuComponent/MenuComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

function AboutPage() {
  return (
    <Box bgcolor="#000000" sx={{ p: 8 }}>
      <Paper sx={{ p: 5 }}>
        <HeaderComponent />
        <MenuComponent />
        <Typography variant="h2" textAlign={"center"} sx={{ p: 4 }}>
          About V0ncent
        </Typography>
        <Box sx={{ p: 4 }} textAlign={"left"}>
          <Typography variant="h4">
            {/* TODO: add a image for self portrait next to bio */}
            Hello! My name is Vincent Banks, I am a self taught artist and
            computer programmer. I enjoy creating grotesque style pieces and
            comics. You can check out my other links below to see more of my
            work!
            <br />
            I hope this site finds you well and you have enjoyed a platform to
            share your work!
            <br />
            <br />
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
            <br />
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default AboutPage;
