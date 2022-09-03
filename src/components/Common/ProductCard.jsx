import React from "react";
import PropTypes from "prop-types";
import { alpha, Box, Stack, Typography } from "@mui/material";
import { formatPrice, truncateText } from "../../utils/common";

ProductCard.propTypes = {
  product: PropTypes.object,
};

function ProductCard({ product }) {
  return (
    <Box
      boxShadow={1}
      sx={{
        border: "2px solid",
        borderColor: "transparent",
        borderRadius: "4px",

        backgroundColor: (theme) => alpha(theme.palette.common.white, 0.1),
        backdropFilter: " blur(20px)",
        overflow: "hidden",
        cursor: "pointer",

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
            src={product.thumbnailUrl}
            alt={product.thumbnailUrl}
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
          <Typography variant="body1">{product.subtitle}</Typography>

          <Typography variant="h6" fontWeight={700}>
            {product.title}
          </Typography>

          <Typography variant="body1" fontStyle="italic">
            Giá: {formatPrice(product.price)}
          </Typography>

          <Typography variant="body1">
            {truncateText(product.description, 80)}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default ProductCard;
