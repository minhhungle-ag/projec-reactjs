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
import SideBar from "../Common/SideBar";

MainLayout.propTypes = {
  children: PropTypes.node,
};

function MainLayout({ children }) {
  const [mode, setMode] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);

  let theme = createTheme({
    palette: {
      mode: mode,
      // primary: {
      //   light: "#ff867c",
      //   main: "#ef5350",
      //   dark: "#b61827",
      //   contrastText: "#ffffff",
      // },
      // primary: {
      //   light: "#BB86FC",
      //   main: "#6200EE",
      //   dark: "#3700B3",
      //   contrastText: "#ffffff",
      // },
      // secondary: {
      //   light: "#fffb50",
      //   main: "#ffc800",
      //   dark: "#c79800",
      //   contrastText: "#ffffff",
      // },
    },
  });

  theme = responsiveFontSizes(theme);

  function handleChangeMode() {
    setMode(mode === "light" ? "dark" : "light");
  }

  function handleDrawerToggle() {
    setMobileOpen((x) => !x);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        sx={{
          minHeight: "100vh",
        }}
      >
        <Header
          onChangeMode={handleChangeMode}
          mode={mode}
          onDrawerToggle={handleDrawerToggle}
        />
        <SideBar onClose={() => setMobileOpen(false)} mobileOpen={mobileOpen} />
        <Box sx={{ flexGrow: 1 }}>{children}</Box>

        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default MainLayout;
