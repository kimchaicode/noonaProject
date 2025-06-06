import React from "react";
import { Button } from "@mui/material";
import { getSpotifyAuthurl } from "../../utilis/auth";

export const LoginButton = () => {
  const login = () => {
    getSpotifyAuthurl();
  };
  return (
    <Button variant="contained" color="secondary" size="large" onClick={login}>
      Login
    </Button>
  );
};

export default LoginButton;
