import React from "react";
import PropTypes from "prop-types";
import {
  alpha,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { pageList } from "../../constants/common";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

SideBar.propTypes = {
  mobileOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

function SideBar({ mobileOpen, onClose }) {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={() => onClose?.()}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& a": {
          textDecoration: "none",
          color: "inherit",
        },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "70%" },
      }}
    >
      <Stack direction="row" justifyContent="center" sx={{ p: 1 }}>
        <Logo />
      </Stack>

      <Divider />

      <List>
        {pageList.map((item, idx) => (
          <ListItem
            disablePadding
            onClick={() => onClose?.()}
            sx={{
              "& a": {
                width: "100%",
                color: "inherit",
                textDecoration: "none",
              },
              ".active": {
                bgcolor: "primary.light",
              },
            }}
          >
            <NavLink
              to={item.link}
              key={idx}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
