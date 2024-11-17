import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { BoldText } from "../BoldText";
import { DrawerToggleButton } from "../IconButton";
import { CustomButton } from "../Button";

export const AppBarComponent = ({ handleDrawerToggle, navItems }) => {
  return (
    <AppBar component="nav" color="secondary">
      <Toolbar>
        <BoldText text="Easy event" />
        <DrawerToggleButton
          onClick={handleDrawerToggle}
          displayProps={{ sm: "none" }}
        />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) =>
            item.action ? (
              // For action buttons like Logout
              <CustomButton
                key={item.label}
                label={item.label}
                onClick={item.action}
              />
            ) : (
              // For navigation links like Login, Events, etc.
              <Link
                to={item.link}
                key={item.label}
                style={{ textDecoration: "none" }}
              >
                <CustomButton label={item.label} />
              </Link>
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
