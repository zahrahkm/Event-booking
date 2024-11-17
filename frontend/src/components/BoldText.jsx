import { Typography } from "@mui/material";
import React from "react";

export const BoldText = ({ text }) => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {text}
    </Typography>
  );
};
