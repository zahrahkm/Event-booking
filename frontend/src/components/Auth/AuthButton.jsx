import React from "react";
import { Button, CircularProgress } from "@mui/material";

export const AuthButton = ({ isSignUp, loading }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      disabled={loading}
    >
      {loading ? (
        <CircularProgress size={24} sx={{ color: "#fff" }} />
      ) : isSignUp ? (
        "Sign Up"
      ) : (
        "Log In"
      )}
    </Button>
  );
};
