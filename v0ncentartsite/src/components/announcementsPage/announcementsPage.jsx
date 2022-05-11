import { Box, Typography } from "@mui/material";

function announcementsPage() {
  return (
    <Box sx={{ border: 1, pt: 2, pb: 2 }}>
      <Typography textAlign={"left"} sx={{ p: 2 }}>
        Announcements!
      </Typography>
    </Box>
  );
}

export default announcementsPage;
