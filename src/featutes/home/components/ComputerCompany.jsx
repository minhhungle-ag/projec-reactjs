import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { computerList } from "../../../constants/common";

ComputerCompany.propTypes = {};

function ComputerCompany(props) {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        sx={{ py: 3, mx: -2 }}
      >
        {computerList.map((item, idx) => (
          <Box sx={{ width: 1 / 4, p: 2 }} key={idx}>
            <Box boxShadow={1} sx={{ bgcolor: "white" }}>
              <Box sx={{ width: "100%" }} component="img" src={item} />
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

export default ComputerCompany;
