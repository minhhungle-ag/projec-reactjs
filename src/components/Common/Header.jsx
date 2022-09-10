import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { alpha, Divider, InputBase, Stack, styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const pages = [
  { label: "Trang chủ", link: "trang-chu" },
  { label: "Sản phẩm", link: "san-pham" },
  { label: "Giới thiệu", link: "gioi-thieu" },
  { label: "Liên hệ", link: "lien-he" },
];

Header.propTypes = {
  onChangeMode: PropTypes.func,
  mode: PropTypes.string,
  onDrawerToggle: PropTypes.func,
};

export function Header({ onChangeMode, mode, onDrawerToggle }) {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        "& a": {
          color: "inherit",
          textDecoration: "none",
        },
      }}
    >
      <Container>
        <Box component="nav" sx={{ mx: { xs: -1, md: 0 }, my: 2 }}>
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                color="inherit"
                onClick={() => onDrawerToggle?.()}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Logo />

            <Box sx={{ flexGrow: 1 }} />

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                flexGrow: 1,

                ".active": {
                  color: "primary.main",
                },
              }}
            >
              {pages.map((page, idx) => (
                <NavLink
                  to={page.link}
                  key={idx}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <Button
                    key={page}
                    color="inherit"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  >
                    {page.label}
                  </Button>
                </NavLink>
              ))}
            </Stack>

            <IconButton size="large" color="inherit">
              <SearchIcon fontSize="medium" />
            </IconButton>

            <IconButton size="large" color="inherit">
              <ShoppingCartOutlinedIcon fontSize="medium" />
            </IconButton>

            <IconButton onClick={() => onChangeMode?.()} color="inherit">
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
