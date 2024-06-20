import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../Theme/theme";
import Image from "../../../images/Background5.jpg";
import Avatar from "../../../images/Avatar.jpg";
import { Box, Button, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import {
  useGetUserProfileQuery,
  useCreateTokenMutation,
} from "../../../Service/api";

const Profile = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [generatedToken, setGeneratedToken] = useState("");
  const [isTokenVisible, setIsTokenVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [valid_till, setValidTill] = useState("");
  const { data: userProfile, error } = useGetUserProfileQuery();
  const [createToken] = useCreateTokenMutation();

  useEffect(() => {
    if (userProfile) {
      const { email, organization, token, valid_till } = userProfile.data;
      setEmail(email);
      setOrganization(organization);
      setValidTill(valid_till);
      if (token) {
        setGeneratedToken(token);
        setIsTokenVisible(true);
        setIsButtonDisabled(true);
      }
    }

    if (error) {
      console.error("Error fetching user profile data:", error);
    }
  }, [userProfile, error]);

  const handleGenerateClick = () => {
    if (selectedDate) {
      const expirationDate = new Date(selectedDate);
      expirationDate.setHours(23, 59, 59);
      const timestamp = expirationDate.toISOString();

      const randomString = Math.random().toString(36).substring(2, 15);
      setGeneratedToken(randomString);
      setIsTokenVisible(true);
      setIsButtonDisabled(true);

      const tokenData = {
        token: {
          token: randomString,
          valid_till: timestamp,
        },
      };

      createToken(tokenData)
        .unwrap()
        .then((data) => {})
        .catch((error) => {
          console.error("Token generation error:", error);
        });
    } else {
      alert("Please enter token expiration date.");
    }
  };

  const handleCopyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Copied Successfully "${text}"`);
      })
      .catch((error) => {
        console.error("Copy failed:", error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Layout>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              minHeight: "100vh",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                background: "#FFF",
                padding: "0px 20px",
                borderRadius: "16px",
                textAlign: "center",
                height: "450px",
                width: "50rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
                [theme.breakpoints.down("sm")]: {
                  flexDirection: "column",
                  justifyContent: "unset",
                  paddingTop: "50px",
                  minHeight: "780px",
                  gap: "30px",
                  marginTop: "5rem",
                },
              }}
            >
              <Box
                sx={{
                  height: "300px",
                  width: "50%",
                  backgroundColor: "rgba(217, 217, 217, 5)",
                  borderRadius: "10px",
                  boxShadow: "0px 8px 6px 5px rgba(255, 226, 73, 0.15)",
                  [theme.breakpoints.down("sm")]: {
                    height: "310px",
                    width: "80%",
                  },
                  [theme.breakpoints.down("xs")]: {
                    height: "280px",
                    width: "80%",
                  },
                }}
              >
                <img
                  src={Avatar}
                  alt="Avatar"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginTop: "1rem",
                  }}
                />
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "25px",
                    fontFamily: "Poppins, sans-serif",
                    mt: "1rem",
                    [theme.breakpoints.down("xs")]: {
                      fontSize: "20px",
                      mt: "0.1rem",
                    },
                  }}
                >
                  Your Profile
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  [theme.breakpoints.down("sm")]: {
                    height: "310px",
                    width: "80%",
                  },
                  [theme.breakpoints.down("xs")]: {
                    height: "310px",
                    width: "80%",
                  },
                }}
              >
                <TextField
                  label="Organization[Optional]"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(217, 217, 217, 0.2)",
                    marginBottom: "1.5rem",
                  }}
                  value={organization}
                />
                <TextField
                  label="Email"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(217, 217, 217, 0.2)",
                    marginBottom: "1.5rem",
                  }}
                  value={email}
                />
                <TextField
                  label="Token"
                  required
                  value={generatedToken}
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(217, 217, 217, 0.2)",
                    marginBottom: "1.5rem",
                  }}
                  InputProps={{
                    endAdornment: isTokenVisible && (
                      <IconButton
                        onClick={() => handleCopyText(generatedToken)}
                        aria-label="copy"
                      >
                        <FileCopyIcon />
                      </IconButton>
                    ),
                  }}
                />
                {isTokenVisible ? (
                  <TextField
                    id="date"
                    label="Token Expiration Date"
                    required
                    value={new Date(valid_till).toLocaleDateString("en-UK")}
                    style={{
                      width: "100%",
                      backgroundColor: "rgba(217, 217, 217, 0.2)",
                      marginBottom: "1.5rem",
                    }}
                  />
                ) : (
                  <Stack
                    component="form"
                    noValidate
                    spacing={3}
                    style={{ width: "100%" }}
                  >
                    <TextField
                      id="date"
                      label="Select Validity Date"
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(217, 217, 217, 0.2)",
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      disabled={isTokenVisible}
                    />
                  </Stack>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    position: "absolute",
                    width: "220px",
                    height: "50px",
                    background:
                      "linear-gradient(270deg, #FFE249 6.69%, #B49701 74.02%)",
                    boxShadow: "0px 8px 6px rgba(255, 226, 73, 0.15)",
                    borderRadius: "104px",
                    color: "#000",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "poppins",
                    marginTop: "23.5rem",
                    [theme.breakpoints.down("xs")]: {
                      width: "180px",
                      height: "45px",
                      fontSize: "14px",
                    },
                  }}
                  onClick={handleGenerateClick}
                  disabled={isButtonDisabled}
                >
                  Generate token
                </Button>
              </Box>
            </Box>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default Profile;
