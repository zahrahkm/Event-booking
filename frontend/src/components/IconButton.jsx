import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const DrawerToggleButton = ({
  onClick,
  displayProps,
  color = "inherit",
  ariaLabel = "open drawer",
  edge = "start",
  sx = {},
}) => {
  return (
    <IconButton
      color={color}
      aria-label={ariaLabel}
      edge={edge}
      onClick={onClick}
      sx={{ mr: 2, display: displayProps, ...sx }}
    >
      <MenuIcon />
    </IconButton>
  );
};
