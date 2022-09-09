import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import CategoryCard from "../../../components/Common/CategoryCard";
import { accessoryList } from "../../../constants/common";

function AccessoryList(props) {
  return (
    <Box sx={{ backdropFilter: "blur(20px)" }}>
      <Container>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ mb: 1, textAlign: "center" }}
        >
          Danh mục phụ kiện
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          sx={{ mx: -2 }}
        >
          {Array.isArray(accessoryList) &&
            accessoryList.length > 0 &&
            accessoryList.map((item, idx) => (
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

export default AccessoryList;
