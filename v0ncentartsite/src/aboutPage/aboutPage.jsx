import { Box, Paper, Typography } from "@mui/material";

import MenuComponent from "../MenuComponent/MenuComponent";
//Import react
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();
  return (
    <Box bgcolor="#000000" sx={{ p: 8 }}>
      <Paper sx={{ p: 5 }}>
        <Typography
          variant="h2"
          textAlign={"center"}
          onClick={() => navigate("/")}
        >
          About V0ncent
        </Typography>
        <MenuComponent />
        <Box sx={{ p: 4 }} textAlign={"left"}>
          <Typography variant="h4">
            this is a bio or something
            <br />
            <br />
            Email:
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
            other links:
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default AboutPage;
