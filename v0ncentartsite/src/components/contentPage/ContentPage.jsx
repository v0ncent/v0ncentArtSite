import { Box, Typography } from "@mui/material";

function contentPage() {
  return (
    <Box sx={{ p: 1, border: 1 }}>
      <Typography textAlign={"center"} variant="h3">
        THIS IS THE CONTENT
      </Typography>
    </Box>
  );
}

export default contentPage;
