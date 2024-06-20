import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../../../../components/Layout/Layout";
import theme from "../../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Image from "../../../../images/HornetBg.png";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import H1Logo from "../../../../images/hornet-h1.png";
import { useSignInMutation } from "../../../../Service/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use the generated mutation hook
  const [signIn, { error }] = useSignInMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signIn({ email, password });

      if (data.message === "success") {
        window.location.href = "/dashboard";
      } else {
        console.log("Error Message:", data.message);
      }
    } catch (error) {
      console.error("Actual Error:", error);
      console.error("Error Message:", error.message);
      alert("Login Failed");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Layout>
          <div
            style={{
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
              },
            }}
          >
            <form
              style={{
                minWidth: 400,
                padding: 20,
              }}
              onSubmit={handleSubmit}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "40px",
                  [theme.breakpoints.down("sm")]: {
                    padding: "1rem",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "180px",
                    height: "68px",
                    [theme.breakpoints.down("sm")]: {
                      marginTop: "3rem",
                    },
                  }}
                >
                  <img src={H1Logo} alt="hornet" height="65px" width="180px" />
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
                    Login
                  </h2>
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
                  <Box
                    sx={{
                      width: "86px",
                      height: "88px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      [theme.breakpoints.down("sm")]: {
                        width: "68px",
                        height: "70px",
                      },
                    }}
                  >
                    <PersonIcon
                      sx={{
                        fontSize: "40px",
                        // Adjust the margin as needed
                      }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      placeholder="Email"
                      variant="standard"
                      fullWidth
                      sx={{
                        flex: 1, // Take remaining space
                        background: "#fff",
                        borderRadius: "104px",
                        paddingTop: "1rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        width: "500px",
                        [theme.breakpoints.down("sm")]: {
                          maxWidth: "250px",
                          paddingTop: "0rem",
                        },
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                  <Box>
                    <TextField
                      placeholder="Password"
                      variant="standard"
                      type="password"
                      fullWidth
                      sx={{
                        flex: 1,
                        background: "#fff",
                        borderRadius: "104px",
                        paddingTop: "1rem",
                        paddingLeft: "3rem",
                        paddingRight: "0rem",
                        width: "500px",
                        [theme.breakpoints.down("sm")]: {
                          maxWidth: "250px",
                          paddingTop: "0rem",
                        },
                      }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Box>
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
                        marginLeft: "0.9rem",
                      },
                    }}
                  >
                    <LockOpenIcon
                      sx={{
                        fontSize: "40px",
                      }}
                    />
                  </Box>
                </Box>

                {error && (
                  <Box style={{ color: "red", marginBottom: 10 }}>{error}</Box>
                )}
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="outlined"
                    type="submit"
                    sx={{
                      boxSizing: "border-box",
                      width: "254px",
                      height: "52px",
                      border: "2px solid #FFE249",
                      filter:
                        "drop-shadow(0px 8px 6px rgba(255, 226, 73, 0.15))",
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
                    Login
                  </Button>
                </Box>
                <Box
                  style={{ marginTop: 10, textAlign: "center", color: "#fff" }}
                >
                  Don't have an account with us?{" "}
                  <Link to="/register" style={{ color: "#ffe249" }}>
                    Register now!
                  </Link>
                </Box>
              </Box>
            </form>
          </div>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default Login;
