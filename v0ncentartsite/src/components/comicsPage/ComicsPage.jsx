import { Typography } from "@mui/material";

// Importing needed components
import TopNav from "../TopNav/TopNav";
import { 
  getAllItems,  
  //these arent used but they are there to be used
  getOneItem,
  updateOneItem,
  deleteOneItem
} from "../../MongoGetter";

function ComicsPage() {
  //comics route test





  return (
    <>
      <TopNav />
      <Typography>comicsPage</Typography>
    </>
  );
}

export default ComicsPage;
