import React from "react";
import PropTypes from "prop-types";
import { alpha, Box, Stack, Typography } from "@mui/material";

CategoryCard.propTypes = {
  category: PropTypes.object,
};

function CategoryCard({ category }) {
  return (
    <Box
      boxShadow={1}
      sx={{
        borderRadius: 1,
        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.5),
        backdropFilter: " blur(20px)",
        overflow: "hidden",

        "&:hover": {
          boxShadow: `0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)`,
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
