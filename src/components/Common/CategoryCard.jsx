import React from "react";
import PropTypes from "prop-types";
import { alpha, Box, Stack, Typography } from "@mui/material";

CategoryCard.propTypes = {
  category: PropTypes.object,
};

function CategoryCard({ category }) {
  return (
    <Box
      boxShadow={3}
      sx={{
        border: "2px solid",
        borderColor: "transparent",
        borderRadius: 1,
        backgroundColor: (theme) => alpha(theme.palette.common.white, 0.1),
        backdropFilter: " blur(20px)",
        overflow: "hidden",

        "&:hover": {
          borderColor: "primary.main",
          boxShadow:
            "0px 6px 8px -4px rgba(221, 88, 255, 0.2), 0px 10px 16px 3px rgba(221, 88, 255, 0.14), 0px 4px 24px 6px rgba(221, 88, 255, 0.12)",
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
    </Box>
  );
}

export default CategoryCard;
