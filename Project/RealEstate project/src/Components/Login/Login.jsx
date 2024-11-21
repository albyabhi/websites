import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline,
  Avatar,
  Tabs,
  Tab,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios"; // Ensure you have axios imported

function Login() {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({}); // State to track errors

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleRegSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const username = data.get("username");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");
    const phno = data.get("phno");

    // Basic validation
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    const userData = { email, username, password, phno };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );
      console.log("User registered successfully:", response.data);
      // Handle success (e.g., redirect or show a message)
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
      // Handle errors (e.g., show an error message)
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    // Basic validation (additional validations can be added)
    if (!email || !password) {
      setErrors({ login: "Email and Password are required" });
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      console.log("User logged in successfully:", response.data);
      // Handle success (e.g., redirect or show a message)
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      // Handle errors (e.g., show an error message)
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#f5f5f5",
          padding: 3,
          borderRadius: 5,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="login and sign up tabs"
          sx={{ marginBottom: 2 }}
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        {activeTab === 0 && (
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleLoginSubmit}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!errors.login}
              helperText={errors.login}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.login}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        )}

        {activeTab === 1 && (
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleRegSubmit}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phno"
              label="Phone number"
              name="phno"
              autoComplete="phno"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Login;
