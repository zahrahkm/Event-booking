import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useCreateUser } from "../api/useCreateUser";
import { useLoginUser } from "../api/useLoginUser";
import { AuthFormFields } from "./Auth/AuthFormField";
import { AuthButton } from "./Auth/AuthButton";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = useLoginUser();

  const { createNewUser: signUp } = useCreateUser();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      navigate("/events");
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isSignUp]);

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        {isSignUp ? "Sign Up" : "Login"}
      </Typography>

      {errorMessage && (
        <Typography color="error" sx={{ mb: 1 }}>
          {errorMessage}
        </Typography>
      )}

      <AuthFormFields
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
      />

      <AuthButton isSignUp={isSignUp} loading={loading} />

      <Typography
        onClick={() => setIsSignUp((prev) => !prev)}
        sx={{
          cursor: "pointer",
          color: "primary.main",
          textDecoration: "underline",
          textAlign: "center",
        }}
      >
        {isSignUp
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </Typography>
    </Box>
  );
};
export default LoginForm;
