import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import CategoryCard from "../../../components/Common/CategoryCard";
import { categoryList } from "../../../constants/common";

function CategoryList(props) {
  return (
    <Box sx={{ backdropFilter: "blur(20px)" }}>
      <Container>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ mb: 1, textAlign: "center" }}
        >
          Danh mục sản phẩm
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          sx={{ mx: -2 }}
        >
          {Array.isArray(categoryList) &&
            categoryList.length > 0 &&
            categoryList.map((item, idx) => (
              <Box
                sx={{
                  width: { xs: "100%", sm: 1 / 2, md: 1 / 4 },
                  p: 2,
                  cursor: "pointer",
                }}
                key={idx}
              >
                <CategoryCard category={item} />
              </Box>
            ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default CategoryList;
