import { Box, Typography } from "@mui/material";

function aboutPage() {
  return (
    <Box>
      <Typography variant="h1" textAlign={"center"}>
        About V0ncent
      </Typography>
      <Box sx={{ p: 4 }} textAlign={"left"}>
        <Typography variant="h4">
          this is a bio or sumtin
          <br />
          <br />
          Email:
          <br />
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
          <br />
          other links:
        </Typography>
      </Box>
    </Box>
  );
}

export default aboutPage;
