import { Box, Container, Divider } from "@mui/material";
import Banner from "../../../components/Common/Banner";
import AccessoryList from "../components/AccessoryList";
import BestSell from "../components/BestSell";
import CategoryList from "../components/CategoryList";
import ComputerCompany from "../components/ComputerCompany";
import SaleOf from "../components/SaleOf";

function HomePage(props) {
  return (
    <Box>
      <Box sx={{ my: 3 }}>
        <Banner />
      </Box>

      <Box sx={{ my: 3 }}>
        <ComputerCompany />
      </Box>

      <Box sx={{ my: 3 }}>
        <CategoryList />
      </Box>

      <Box sx={{ my: 3 }}>
        <BestSell />
      </Box>

      <Box sx={{ my: 3 }}>
        <AccessoryList />
      </Box>

      <Box sx={{ my: 3 }}>
        <SaleOf />
      </Box>
    </Box>
  );
}

export default HomePage;
