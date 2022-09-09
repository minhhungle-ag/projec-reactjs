import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../../components/Common/ProductCard";
import { productList } from "../../../constants/common";

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

        <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
          {productList
            .filter((item, idx) => idx < 8)
            .map((item, idx) => (
              <Box
                sx={{ width: { xs: "100%", sm: 1 / 2, md: 1 / 4 } }}
                key={idx}
              >
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
