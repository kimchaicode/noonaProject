import { Alert } from "@mui/material";
import React from "react";

//model에 정의하지 않은 이유: 이 component안에서만 사용된다.
interface ErrorMessageProps {
  errorMessage: string;
}
export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return <Alert severity="error">{errorMessage}</Alert>;
};
