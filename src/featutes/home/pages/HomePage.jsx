import { Box, Container, Divider } from "@mui/material";
import Banner from "../../../components/Common/Banner";
import BestSell from "../components/BestSell";
import CategoryList from "../components/CategoryList";
import SaleOf from "../components/SaleOf";

function HomePage(props) {
  return (
    <Box>
      <Box sx={{ my: 3 }}>
        <Banner />
      </Box>

      <Box sx={{ my: 3 }}>
        <CategoryList />
      </Box>

      <Container>
        <Divider />
      </Container>

      <Box sx={{ my: 3 }}>
        <BestSell />
      </Box>

      <Container>
        <Divider />
      </Container>

      <Box sx={{ my: 3 }}>
        <SaleOf />
      </Box>
    </Box>
  );
}

export default HomePage;
