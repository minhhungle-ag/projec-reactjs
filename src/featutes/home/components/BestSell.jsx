import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Stack, Typography } from "@mui/material";
import { productList } from "../../../constants/common";
import ProductCard from "../../../components/Common/ProductCard";

BestSell.propTypes = {};

function BestSell(props) {
  return (
    <Box>
      <Container>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ py: 3, textAlign: "center" }}
        >
          Sản phẩm bán chạy
        </Typography>

        <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
          {productList.map((item, idx) => (
            <Box sx={{ width: { xs: "100%", sm: 1 / 2, md: 1 / 3 } }}>
              <Box sx={{ p: 2 }}>
                <ProductCard product={item} />
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default BestSell;
