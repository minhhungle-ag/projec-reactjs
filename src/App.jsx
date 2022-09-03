import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  responsiveFontSizes,
} from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/Common/NotFound";
import MainLayout from "./components/Layouts/MainLayout";
import About from "./featutes/About/About";
import Contact from "./featutes/contact/Contact";
import HomePage from "./featutes/home/pages/HomePage";
import Products from "./featutes/products/pages/Products";

let theme = createTheme({
  palette: {
    primary: {
      light: "#e45dff",
      main: "#ad1df4",
      dark: "#7700c0",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff5231",
      main: "##d80000",
      dark: "#9e0000",
      contrastText: "#ffffff",
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Toolbar />

        <Routes>
          <Route path="/" element={<Navigate to="trang-chu" />} />
          <Route path="trang-chu" element={<HomePage />} />
          <Route path="san-pham" element={<Products />} />
          <Route path="gioi-thieu" element={<About />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
