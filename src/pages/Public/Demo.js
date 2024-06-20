import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import theme from "../../Theme/theme";
import { ThemeProvider } from "@emotion/react";
import { motion } from "framer-motion";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  Snackbar,
  Alert,
  AlertTitle,
} from "@mui/material";
import Image from "../../images/Demo_Bg.jpg";
import Grid from "@mui/material/Grid";
import { TextareaAutosize } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import InputAdornment from "@mui/material/InputAdornment";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import SquareIcon from "@mui/icons-material/Square";

const Demo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !company ||
      !phone ||
      !message ||
      !isCheckboxSelected
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    const data = {
      name: name,
      email: email,
      company: company,
      phone: phone,
      message: message,
    };

    const url =
      "https://script.google.com/macros/s/AKfycbwEZCLpYp8nShh5IM32O474sr5foUekm1ZuMJ3_6tV3_mylvGkNzEjkEnl1GvCaqBsx/exec";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setSubmitMessage("Submission successful."); // Set success message
        setOpen(true);
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => console.log("err", err));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpen(false);
  };

  const customStyles = {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20px",
      minHeight: "100vh",
      backgroundImage: `url(${Image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    button: {
      width: "200px",
      height: "50px",
      background: "linear-gradient(270deg, #FFE249 6.69%, #B49701 74.02%)",
      boxShadow: "0px 8px 6px rgba(255, 226, 73, 0.15)",
      borderRadius: "20px",
      color: "#000",
      textTransform: "capitalize",
      fontWeight: "bold",
      fontSize: "22px",
      fontFamily: "poppins",
      marginTop: "1rem",
    },
    Container: {
      background: "#FFF",
      borderRadius: "20px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "700px",
      minHeight: "750px",
      boxShadow: "0px 0px 8px 0px #fff",
    },
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
              ...customStyles.main,
              display: "flex",
              flexDirection: "row",
              width: "100%",
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                padding: "5rem",
              },
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                padding: "5rem 2rem",
              },
              [theme.breakpoints.down("xs")]: {
                flexDirection: "column",
                padding: "5rem 0.8rem",
              },
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5rem 1rem 1.5rem 5rem",
                  maxWidth: "500px",
                  [theme.breakpoints.down("md")]: {
                    maxWidth: "none",
                    textAlign: "center",
                    padding: "1rem 1rem 2rem 1rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    maxWidth: "500px",
                    textAlign: "center",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#111010",
                    fontFamily: "Times New Roman",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "40px",
                    lineHeight: "46px",
                    [theme.breakpoints.down("xs")]: {
                      fontSize: "20px",
                      lineHeight: "22px",
                    },
                  }}
                >
                  Curious about the transformation Hornet can bring to your
                  crypto and cybersecurity journey?
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0rem 1rem 0rem 5rem",
                  maxWidth: "450px",
                  width: "100%",
                  flexDirection: "column",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "20px",
                  }}
                >
                  <SquareIcon
                    style={{
                      fontSize: "24px",
                    }}
                  />
                  <Typography
                    style={{
                      color: "#262626",
                      fontFamily: "Times New Roman",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "24px",
                      lineHeight: "28px",
                      marginLeft: "10px",
                    }}
                  >
                    We will guide you in safeguarding your digital assets with
                    precision and vigilance.
                  </Typography>
                </Box>

                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "20px",
                  }}
                >
                  <SquareIcon
                    style={{
                      fontSize: "24px",
                    }}
                  />
                  <Typography
                    style={{
                      color: "#262626",
                      fontFamily: "Times New Roman",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "24px",
                      lineHeight: "28px",
                      marginLeft: "10px",
                    }}
                  >
                    Explore the unseen world of darknet threats and gain the
                    upper hand in cybersecurity.
                  </Typography>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "20px",
                  }}
                >
                  <SquareIcon
                    style={{
                      fontSize: "24px",
                    }}
                  />
                  <Typography
                    style={{
                      color: "#262626",
                      fontFamily: "Times New Roman",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "24px",
                      lineHeight: "28px",
                      marginLeft: "10px",
                    }}
                  >
                    We offer a comprehensive approach to fortifying your digital
                    defences in the crypto era.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                ...customStyles.Container,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                padding: "1rem 4rem",
                margin: "5rem",
                [theme.breakpoints.down("md")]: {
                  padding: "2.5rem",
                  margin: "1rem",
                },
                [theme.breakpoints.down("sm")]: {
                  padding: "2rem",
                  margin: "0rem",
                },
                [theme.breakpoints.down("xs")]: {
                  padding: "0.8rem",
                  margin: "0rem",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Times New Roman",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "38px",
                  [theme.breakpoints.down("xs")]: {
                    fontSize: "25px",
                    fontWeight: 500,
                  },
                }}
              >
                Request a Demo
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            textAlign: "left",
                            [theme.breakpoints.down("md")]: {
                              marginTop: "1rem",
                            },
                            [theme.breakpoints.down("xs")]: {
                              fontSize: "15px",
                              marginTop: "0.5rem",
                            },
                          }}
                        >
                          Name <span>*</span>
                        </Typography>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          sx={{
                            width: "100%",
                            backgroundColor: "rgba(217, 217, 217, 0.5)",
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <PersonIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Typography
                          sx={{
                            textAlign: "left",
                            marginTop: "1rem",
                            [theme.breakpoints.down("xs")]: {
                              fontSize: "15px",
                              marginTop: "0.5rem",
                            },
                          }}
                        >
                          Email <span>*</span>
                        </Typography>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{
                            width: "100%",
                            backgroundColor: "rgba(217, 217, 217, 0.5)",
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <EmailIcon />
                              </InputAdornment>
                            ),
                          }}
                        />

                        <Typography
                          sx={{
                            textAlign: "left",
                            marginTop: "1rem",
                            [theme.breakpoints.down("xs")]: {
                              fontSize: "15px",
                              marginTop: "0.5rem",
                            },
                          }}
                        >
                          Company Name <span>*</span>
                        </Typography>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          style={{
                            width: "100%",
                            backgroundColor: "rgba(217, 217, 217, 0.5)",
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <BusinessIcon />
                              </InputAdornment>
                            ),
                          }}
                        />

                        <Typography
                          sx={{
                            textAlign: "left",
                            marginTop: "1rem",
                            [theme.breakpoints.down("xs")]: {
                              fontSize: "15px",
                              marginTop: "0.5rem",
                            },
                          }}
                        >
                          Phone Number <span>*</span>
                        </Typography>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          style={{
                            width: "100%",
                            backgroundColor: "rgba(217, 217, 217, 0.5)",
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <PhoneInTalkIcon />
                              </InputAdornment>
                            ),
                          }}
                        />

                        <Typography
                          sx={{
                            textAlign: "left",
                            marginTop: "1rem",
                            [theme.breakpoints.down("xs")]: {
                              fontSize: "15px",
                              marginTop: "0.5rem",
                            },
                          }}
                        >
                          Tell us a bit more about your requirements{" "}
                          <span>*</span>
                        </Typography>
                        <TextareaAutosize
                          id="outlined-basic"
                          minRows={7}
                          placeholder="Write Your Message"
                          style={{
                            width: "100%",
                            backgroundColor: "rgba(217, 217, 217, 0.5)",
                            fontSize: "16px",
                          }}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "1rem",
                        [theme.breakpoints.down("xs")]: {
                          marginTop: "0.5rem",
                        },
                      }}
                    >
                      <Box>
                        <Checkbox
                          sx={{ color: "#000" }}
                          checked={isCheckboxSelected}
                          onChange={(e) =>
                            setIsCheckboxSelected(e.target.checked)
                          }
                        />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            textAlign: "left",
                            [theme.breakpoints.down("xs")]: {
                              fontSize: "15px",
                              lineHeight: "20px",
                              textAlign: "left",
                            },
                          }}
                        >
                          Selecting this checkbox signals your interest in
                          receiving updates on Hornet products, services,
                          events, and news. Rest assured, your personal
                          information will be managed in compliance with Hornet
                          privacy policy.
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        width: "200px",
                        height: "50px",
                        background:
                          "linear-gradient(270deg, #FFE249 6.69%, #B49701 74.02%)",
                        boxShadow: "0px 8px 6px rgba(255, 226, 73, 0.15)",
                        borderRadius: "20px",
                        color: "#000",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        fontSize: "22px",
                        fontFamily: "poppins",
                        marginTop: "1rem",
                        [theme.breakpoints.down("xs")]: {
                          width: "140px",
                          height: "35px",
                          fontSize: "15px",
                        },
                      }}
                      onClick={handleDemoSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message={submitMessage}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            ContentProps={{
              sx: customStyles.alert,
            }}
          >
            <Alert onClose={handleClose} severity="success">
              <AlertTitle>Success</AlertTitle>
              {submitMessage}
            </Alert>
          </Snackbar>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};
export default Demo;
