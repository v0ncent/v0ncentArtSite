import { Box, Typography } from "@mui/material";

export default function GalleryItems(image, i) {
  return (
    <Box key={i} sx={{ border: 2 }}>
      <Typography sx={{ backgroundColor: "primary.grey" }}>
        {image.title}
      </Typography>
      <img alt={image.title} src={image.imageURL}></img>
    </Box>
  );
}
