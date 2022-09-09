import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";

const pages = [
  { label: "Trang chủ", link: "trang-chu" },
  { label: "Sản phẩm", link: "san-pham" },
  { label: "Giới thiệu", link: "gioi-thieu" },
  { label: "Liên hệ", link: "lien-he" },
];

Header.propTypes = {
  onChangeMode: PropTypes.func,
  mode: PropTypes.string,
};

export function Header({ onChangeMode, mode }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        "& a": {
          color: "inherit",
          textDecoration: "none",
        },
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton size="large" color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          <DevicesOutlinedIcon sx={{ mr: 2.5, fontSize: { xs: 32, sm: 48 } }} />

          <Link to="/trang-chu">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>Khải PC</Box>

              <Box sx={{ display: { sm: "none" } }}>ATP</Box>
            </Typography>
          </Link>

          <Box sx={{ flexGrow: { xs: 0, md: 1 } }} />

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: {
                xs: "none",
                md: "flex",

                ".active": {
                  color: "primary.main",
                },
              },
            }}
          >
            {pages.map((page, idx) => (
              <NavLink
                to={page.link}
                key={idx}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Button key={page} color="inherit">
                  {page.label}
                </Button>
              </NavLink>
            ))}
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton size="large" color="inherit">
            <SearchIcon fontSize="medium" />
          </IconButton>

          <IconButton size="large" color="inherit">
            <ShoppingCartOutlinedIcon fontSize="medium" />
          </IconButton>

          <IconButton
            sx={{ ml: 1 }}
            onClick={() => onChangeMode?.()}
            color="inherit"
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
