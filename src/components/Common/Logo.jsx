import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <Stack direction="row" alignItems="center" spacing={2.5}>
      <DevicesOutlinedIcon
        sx={{
          fontSize: { xs: 32, sm: 48 },
          color: "inherit",
        }}
      />

      <Link to="/trang-chu">
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: { sm: 2 },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Khải PC
        </Typography>
      </Link>
    </Stack>
  );
}

export default Logo;
