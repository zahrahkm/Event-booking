import React from "react";
import "./App.css";
import { MainNavigation } from "./components/Navigation/MainNavigation";
import { Box, Toolbar } from "@mui/material";
import { RouteConfig } from "./modules/RouteConfig";

function App() {
  return (
    <>
      <MainNavigation />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <RouteConfig />
      </Box>
    </>
  );
}

export default App;
