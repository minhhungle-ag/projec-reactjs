import React from "react";
import PropTypes from "prop-types";
import Header from "../Common/Header";
import { Box, Stack } from "@mui/material";

MainLayout.propTypes = {
  children: PropTypes.node,
};

function MainLayout({ children }) {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
      }}
    >
      <Header />

      <Box>{children}</Box>
    </Stack>
  );
}

export default MainLayout;
