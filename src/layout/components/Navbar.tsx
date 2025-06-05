import React from "react";
import { Box } from "@mui/material";
import { LoginButton } from "../../common/components/LoginButton";

export const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 64,
      }}
    >
      <LoginButton />
    </Box>
  );
};
