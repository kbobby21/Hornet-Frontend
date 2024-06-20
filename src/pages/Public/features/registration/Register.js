import React, { useState } from "react";
import { Box, TextField, Button, Checkbox } from "@mui/material";
import theme from "../../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import H1Logo from "../../../../images/hornet-h1.png";
import Image from "../../../../images/HornetBg.png";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../../../../Service/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signUp] = useSignUpMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formErrors.email || formErrors.password || formErrors.confirmPassword) {
      return; // Don't submit if there are form errors
    } else if (!isCheckboxSelected) {
      alert("Please Agree to Hornet Terms and Condition .");
      return;
    }
    // dispatch(registerUser({ organization, email, password }));

    try {
      const { data } = await signUp({ organization, email, password });

      if (data.message === "success") {
        alert("Please verify your email by checking your inbox");
        window.location.href = "/login";
      } else {
        console.error("Error Message:", data.message);
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Actual Error:", error);
      console.error("Error Message:", error.message);
      alert("Registration failed. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        setFormErrors({
          ...formErrors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "Please enter a valid email address",
        });
        break;
      case "password":
        setPassword(value);
        setFormErrors({
          ...formErrors,
          password: value.trim() ? "" : "Please enter a password",
        });
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        setFormErrors({
          ...formErrors,
          confirmPassword: value === password ? "" : "Passwords do not match",
        });
        break;
      case "organization":
        setOrganization(value);
        break;
      default:
        break;
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            padding: theme.spacing(5),
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            [theme.breakpoints.down("sm")]: {
              padding: theme.spacing(5),
              height: "125vh",
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "30px",
                [theme.breakpoints.down("sm")]: {
                  padding: "1rem",
                  gap: "25px",
                },
              }}
            >
              <Box
                sx={{
                  width: "180px",
                  height: "68px",
                  marginRight: "6rem",
                  [theme.breakpoints.down("sm")]: {
                    marginTop: "0em",
                  },
                }}
              >
                <img src={H1Logo} alt="hornet" height="80px" width="250px" />
              </Box>
              <Box>
                <h2
                  style={{
                    fontSize: 40,
                    fontWeight: 700,
                    fontFamily: "Arial",
                    textAlign: "center",
                    color: "#fff",
                    lineHeight: "46px",
                  }}
                >
                  Register
                </h2>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center", // Center items vertically
                  height: "88px",
                  width: "610px",
                  background: "#fff",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "104px",
                  flexDirection: "row",
                  [theme.breakpoints.down("sm")]: {
                    maxWidth: "500px",
                    width: "100%",
                    height: "70px",
                  },
                }}
              >
                <TextField
                  variant="standard"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
                  error={Boolean(formErrors.email)}
                  helperText={formErrors.email}
                  sx={{
                    flex: 1,
                    background: "#fff",
                    borderRadius: "104px",
                    paddingLeft: "3rem",
                    width: "500px",
                    [theme.breakpoints.down("sm")]: {
                      maxWidth: "250px",
                      paddingTop: "0rem",
                    },
                  }}
                />
                <Box
                  sx={{
                    width: "86px",
                    height: "88px",
                    borderRadius: "50%",
                    backgroundColor: "#D9D9D9",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1.5rem",
                    [theme.breakpoints.down("sm")]: {
                      width: "68px",
                      height: "70px",
                      marginLeft: "2.5rem",
                    },
                  }}
                >
                  <PersonIcon
                    sx={{
                      fontSize: "40px",
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "88px",
                  width: "610px",
                  background: "#fff",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "104px",
                  flexDirection: "row",
                  [theme.breakpoints.down("sm")]: {
                    maxWidth: "500px",
                    width: "100%",
                    height: "70px",
                  },
                }}
              >
                <TextField
                  variant="standard"
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
                  error={Boolean(formErrors.password)}
                  helperText={formErrors.password}
                  sx={{
                    flex: 1,
                    background: "#fff",
                    borderRadius: "104px",
                    paddingLeft: "3rem",
                    paddingRight: "1rem",
                    width: "500px",
                    [theme.breakpoints.down("sm")]: {
                      maxWidth: "250px",
                      paddingTop: "0rem",
                    },
                  }}
                />

                <Box
                  sx={{
                    width: "86px",
                    height: "88px",
                    borderRadius: "50%",
                    backgroundColor: "#D9D9D9",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1.5rem",
                    [theme.breakpoints.down("sm")]: {
                      width: "68px",
                      height: "70px",
                      marginLeft: "2.5rem",
                    },
                  }}
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? (
                    <VisibilityIcon sx={{ fontSize: "40px" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ fontSize: "40px" }} />
                  )}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "88px",
                  width: "610px",
                  background: "#fff",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "104px",
                  flexDirection: "row",
                  [theme.breakpoints.down("sm")]: {
                    maxWidth: "500px",
                    width: "100%",
                    height: "70px",
                  },
                }}
              >
                <TextField
                  variant="standard"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
                  error={Boolean(formErrors.confirmPassword)}
                  helperText={formErrors.confirmPassword}
                  sx={{
                    flex: 1,
                    background: "#fff",
                    borderRadius: "104px",
                    paddingLeft: "3rem",
                    paddingRight: "1rem",
                    width: "500px",
                    [theme.breakpoints.down("sm")]: {
                      maxWidth: "250px",
                      paddingTop: "0rem",
                    },
                  }}
                />

                <Box
                  sx={{
                    width: "86px",
                    height: "88px",
                    borderRadius: "50%",
                    backgroundColor: "#D9D9D9",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1.5rem",
                    [theme.breakpoints.down("sm")]: {
                      width: "68px",
                      height: "70px",
                      marginLeft: "2.5rem",
                    },
                  }}
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? (
                    <VisibilityIcon sx={{ fontSize: "40px" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ fontSize: "40px" }} />
                  )}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "88px",
                  width: "610px",
                  background: "#fff",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "104px",
                  flexDirection: "row",
                  [theme.breakpoints.down("sm")]: {
                    maxWidth: "500px",
                    width: "100%",
                    height: "70px",
                  },
                }}
              >
                <TextField
                  variant="standard"
                  placeholder="Organization[Optional]"
                  name="organization"
                  type="text"
                  value={organization}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
                  sx={{
                    flex: 1,
                    background: "#fff",
                    borderRadius: "104px",
                    paddingLeft: "3rem",
                    paddingRight: "1rem",
                    width: "500px",
                    [theme.breakpoints.down("sm")]: {
                      maxWidth: "250px",
                      paddingTop: "0rem",
                    },
                  }}
                />
                <Box
                  sx={{
                    width: "86px",
                    height: "88px",
                    borderRadius: "50%",
                    backgroundColor: "#D9D9D9",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1.5rem",
                    [theme.breakpoints.down("sm")]: {
                      width: "68px",
                      height: "70px",
                      marginLeft: "2.5rem",
                    },
                  }}
                >
                  <CorporateFareIcon
                    sx={{
                      fontSize: "40px",
                    }}
                  />
                </Box>
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box>
                  <Checkbox
                    style={{ color: "#ffe249" }}
                    checked={isCheckboxSelected}
                    onChange={(e) => setIsCheckboxSelected(e.target.checked)}
                  />
                </Box>
                <Box sx={{ marginTop: "0.5rem" }}>
                  <Link to="/privacyPolicy" style={{ color: "#ffe249" }}>
                    I agree to the Hornet Privacy and Policy.
                  </Link>
                </Box>
              </Box>

              <Box>
                <Button
                  variant="outlined"
                  type="submit"
                  sx={{
                    boxSizing: "border-box",
                    width: "254px",
                    height: "52px",
                    border: "2px solid #FFE249",
                    filter: "drop-shadow(0px 8px 6px rgba(255, 226, 73, 0.15))",
                    borderRadius: "104px",
                    fontFamily: "Arial",
                    fontWeight: 400,
                    lineHeight: "28px",
                    fontSize: "24px",
                    color: "#fff",
                    [theme.breakpoints.down("sm")]: {
                      width: "200px",
                      height: "45px",
                      fontSize: "20px",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>

              <Box>
                <Box style={{ color: "#fff" }}>
                  Already a member ?{" "}
                  <Link to="/login" style={{ color: "#ffe249" }}>
                    Login Here
                  </Link>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default Register;
