import { Box } from "@mui/material";
import Banner from "../../../components/Common/Banner";
import BestSell from "../components/BestSell";
import CategoryList from "../components/CategoryList";

function HomePage(props) {
  return (
    <Box>
      <Box sx={{ my: 3 }}>
        <Banner />
      </Box>

      <Box sx={{ my: 3 }}>
        <CategoryList />
      </Box>

      <Box sx={{ my: 3 }}>
        <BestSell />
      </Box>
    </Box>
  );
}

export default HomePage;
