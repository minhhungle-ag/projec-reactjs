import { Box, Card, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

CategoryCard.propTypes = {
  category: PropTypes.object,
};

function CategoryCard({ category }) {
  return (
    <Card
      sx={{
        borderRadius: 1,

        "&:hover": {
          boxShadow: (theme) => theme.shadows[10],
        },
      }}
    >
      <Stack>
        <Box
          sx={{
            position: "relative",
            height: 0,
            pt: "56.25%",
          }}
        >
          <Box
            component="img"
            src={category.thumbnailUrl}
            alt={category.title}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        <Box sx={{ p: 2, flexGrow: 1 }}>
          <Typography variant="body1">{category.title}</Typography>

          <Typography variant="h6" fontWeight={700}>
            {category.subtitle}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default CategoryCard;
