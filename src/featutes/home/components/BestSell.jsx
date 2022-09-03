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
          sx={{ mb: 1, textAlign: "center" }}
        >
          Sản phẩm bán chạy
        </Typography>

        <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
          {productList
            .filter((item, idx) => idx < 4)
            .map((item, idx) => (
              <Box sx={{ width: { xs: "100%", sm: 1 / 2, md: 1 / 4 } }}>
                <Box sx={{ p: 1 }}>
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
