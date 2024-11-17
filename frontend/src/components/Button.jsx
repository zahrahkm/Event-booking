import React from "react";
import { Button } from "@mui/material";

export const CustomButton = ({ label, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {label}
    </Button>
  );
};
