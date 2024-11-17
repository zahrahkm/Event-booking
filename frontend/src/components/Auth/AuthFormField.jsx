import React from "react";
import { TextField, Box } from "@mui/material";

export const AuthFormFields = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
}) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        required
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        required
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
      />
    </Box>
  );
};
