import React, { useState } from "react";
import { Box, Drawer } from "@mui/material";
import { DrawerComponent } from "./Drawer";
import { AppBarComponent } from "./AppBar";
import { useLoginContext } from "../../modules/useLoginContext";

const drawerWidth = 240;

export const MainNavigation = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isUserLoggedIn, logOut } = useLoginContext();

  const navItems = [
    { label: "Events", link: "/events" },
    ...(isUserLoggedIn
      ? [
          { label: "Bookings", link: "/bookings" },
          { label: "Logout", action: logOut },
        ]
      : [{ label: "Login", link: "/auth" }]),
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
      />

      {/* Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DrawerComponent
            handleDrawerToggle={handleDrawerToggle}
            navItems={navItems}
          />
        </Drawer>
      </nav>
    </Box>
  );
};
