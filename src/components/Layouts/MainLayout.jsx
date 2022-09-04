import {
  Box,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  Stack,
  ThemeProvider,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

MainLayout.propTypes = {
  children: PropTypes.node,
};

function MainLayout({ children }) {
  const [mode, setMode] = useState("light");

  let theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  theme = responsiveFontSizes(theme);

  function handleChangeMode() {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        sx={{
          minHeight: "100vh",
        }}
      >
        <Header onChangeMode={handleChangeMode} mode={mode} />

        <Box>{children}</Box>

        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default MainLayout;
