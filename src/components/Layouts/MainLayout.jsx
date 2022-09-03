import {
  Box,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import PropTypes from "prop-types";
import React, { createContext, useMemo, useState } from "react";
import Header from "../Common/Header";

MainLayout.propTypes = {
  children: PropTypes.node,
};

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[300],
          background: {
            default: amber[50],
            paper: amber[400],
          },
          text: {
            // primary: "#fff",
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[200],
          background: {
            default: grey[900],
            paper: grey[800],
          },
          text: {
            primary: "#fff",
            secondary: grey[800],
          },
        }),
  },
});

function MainLayout({ children }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  let theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack
          sx={{
            minHeight: "100vh",
          }}
        >
          <Header onChangeMode={colorMode.toggleColorMode} />

          <Box>{children}</Box>
        </Stack>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MainLayout;
