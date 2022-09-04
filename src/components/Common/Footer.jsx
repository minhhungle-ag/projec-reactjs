import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  categoryMenu,
  footerPageList,
  socialList,
} from "../../constants/common";

function Footer(props) {
  return (
    <Box
      sx={{
        py: 3,
        borderTop: "1px solid ",
        borderColor: "divider",

        "& a": {
          color: "inherit",
          textDecoration: "none",
        },
      }}
    >
      <Container>
        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box sx={{ py: 3, width: { xs: "100%", sm: 1 / 2, lg: 1 / 3 } }}>
            <Stack direction="row" alignItems="center">
              <DevicesOutlinedIcon
                sx={{ mr: 2.5, fontSize: { xs: 32, sm: 48 } }}
              />

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
                  An Thịnh Phát
                </Typography>
              </Link>
            </Stack>

            <Typography variant="body1" width="70%">
              Chuyên cung cấp các sản phẩm dịch và dịch vụ tin học
            </Typography>
          </Box>

          <Box sx={{ py: 3, width: { xs: "100%", sm: 1 / 2, lg: 1 / 5 } }}>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold">
                Tất cả sản phẩm
              </Typography>

              <Stack spacing={1}>
                {Array.isArray(categoryMenu) &&
                  categoryMenu.map((item, idx) => (
                    <Typography variant="body1" key={idx}>
                      {item.label}
                    </Typography>
                  ))}
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ py: 3, width: { xs: "100%", sm: 1 / 2, lg: 1 / 5 } }}>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold">
                Về chúng tôi
              </Typography>

              <Stack spacing={1}>
                {Array.isArray(footerPageList) &&
                  footerPageList.map((item, idx) => (
                    <Typography variant="body1" key={idx}>
                      {item.label}
                    </Typography>
                  ))}
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ py: 3, width: { xs: "100%", sm: 1 / 2, lg: 1 / 5 } }}>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold">
                Theo dõi chúng tôi
              </Typography>

              <Stack spacing={1}>
                {Array.isArray(socialList) &&
                  socialList.map((item, idx) => (
                    <Typography variant="body1" key={idx}>
                      {item.label}
                    </Typography>
                  ))}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
