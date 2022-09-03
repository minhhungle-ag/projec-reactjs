import { Stack, Typography } from "@mui/material";
import React from "react";

function NotFound(props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 9999,

        width: "100%",
        height: "100%",

        backgroundColor: (theme) => theme.palette.common.white,
      }}
    >
      <Typography variant="h5">Error 404 | Page not found!</Typography>
    </Stack>
  );
}

export default NotFound;
