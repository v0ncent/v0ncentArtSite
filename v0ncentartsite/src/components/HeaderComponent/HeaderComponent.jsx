//Import react
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
  const navigate = useNavigate();
  return (
    <Typography variant="h1" textAlign={"left"} onClick={() => navigate("/")}>
      V0ncent Art Site
    </Typography>
  );
}

export default HeaderComponent;
