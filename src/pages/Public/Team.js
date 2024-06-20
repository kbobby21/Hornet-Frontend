import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "../../Theme/theme";
import { motion } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import Image from "../../images/HornetBg.png";
import SubhroImage from "../../images/Subhro.jpg";
import BobbyImage from "../../images/Bobby.jpeg";
import SouvikImage from "../../images/Souvik.jpg";
import { Link } from "react-router-dom";
import WhiteImage from "../../images/White_Bg.png";

const Team = () => {
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
              minHeight: "100vh",
              flexDirection: "column",
              padding: theme.spacing(5),
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                width: "312px",
                height: "55px",
                [theme.breakpoints.down("md")]: {
                  margin: "2rem",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Times New Roman",
                  fontStyle: "normal",
                  fontWeight: "48px",
                  lineHeight: "55px",
                  color: "#fff",
                  fontSize: "48px",
                }}
              >
                Meet Our <span style={{ color: "#ffe249" }}>Team</span>
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "1480px",
                width: "100%",
                minHeight: "680px",
                background: "#ffffff",
                boxShadow: "0px 4px 4px",
                borderRadius: "20px",
                backgroundImage: `url(${WhiteImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "3rem",
                [theme.breakpoints.down("md")]: {
                  margin: "0rem",
                },
                [theme.breakpoints.down("xs")]: {
                  margin: "0rem",
                  height: "100%",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  padding: "1rem 7rem",
                  [theme.breakpoints.down("lg")]: {
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  [theme.breakpoints.down("md")]: {
                    flexDirection: "column",
                    padding: "2rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    flexDirection: "column",
                    padding: "0.5rem",
                  },
                }}
              >
                <Box
                  sx={{
                    [theme.breakpoints.down("lg")]: {
                      height: "554px",
                      width: "326px",
                    },
                    [theme.breakpoints.down("xs")]: {
                      width: "280px",
                    },
                  }}
                >
                  <Box>
                    <Box
                      style={{
                        position: "relative",
                        marginTop: "10rem",
                        boxShadow: "0px 4px 4px",
                      }}
                    >
                      <Box
                        style={{
                          position: "absolute",
                          clipPath:
                            "polygon(100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%, 50% 0)",
                          backgroundColor: "#FFE249",
                          height: "254px",
                          width: "254px",
                          top: "50%",
                          left: "50%",
                          boxShadow: "0px 4px 4px",
                          transform: "translate(-50%, -50%)", // Rotate by 90 degrees
                        }}
                      ></Box>
                      <Box
                        style={{
                          position: "absolute",
                          clipPath:
                            "polygon(100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%, 50% 0)",
                          backgroundImage: `url(${SouvikImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "222px",
                          width: "222px",
                          top: "50%",
                          left: "50%",
                          boxShadow: "0px 4px 4px",
                          transform: "translate(-50%, -50%)", // Rotate by 90 degrees
                        }}
                      ></Box>
                    </Box>
                    <Box
                      sx={{
                        maxWidth: "326px",
                        width: "100%",
                        height: "390px",
                        background: "#fff9da",
                        boxShadow: "0px 4px 4px",
                        borderRadius: "20px",
                        display: "flex",
                        marginTop: "11rem",
                        padding: "1rem",
                        top: "50%",
                        left: "50%",
                        [theme.breakpoints.down("xs")]: {
                          height: "390px",
                          padding: "0.5rem",
                          marginLeft: "0%",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          marginTop: "7.5rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "15px",
                          alignItems: "center",
                          [theme.breakpoints.down("xs")]: {
                            gap: "10px",
                          },
                        }}
                      >
                        <Box sx={{}}>
                          <Typography
                            sx={{
                              width: "150px",
                              height: "28px",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontSize: "24px",
                              lineHeight: "normal",
                              textAlign: "center",
                              color: "#000",
                            }}
                          >
                            Souvik Haldar
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              width: "200px",
                              height: "28px",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontSize: "18px",
                              lineHeight: "normal",
                              textAlign: "center",
                              color: "#000",
                              fontWeight: 700,
                            }}
                          >
                            Founder & CEO
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              width: "290px",
                              height: "150px",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontSize: "18px",
                              lineHeight: "normal",
                              textAlign: "center",
                              color: "#000",
                              [theme.breakpoints.down("xs")]: {
                                height: "100%",
                                width: "100%",
                              },
                            }}
                          >
                            7+ years of industry experience in cyber security
                            and software development. B.Tech in Computer Science
                            and Engineering, Executive Diploma in Cyber Security
                            from IIT Kanpur and MBA in Financial Management.{" "}
                            <Link to="http://www.souvikhaldar.in">
                              Know more
                            </Link>
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    [theme.breakpoints.down("lg")]: {
                      height: "554px",
                      width: "326px",
                    },
                    [theme.breakpoints.down("xs")]: {
                      width: "280px",
                    },
                  }}
                >
                  <Box>
                    <Box
                      style={{
                        position: "relative",
                        marginTop: "10rem",
                        boxShadow: "0px 4px 4px",
                      }}
                    >
                      <Box
                        style={{
                          position: "absolute",
                          clipPath:
                            "polygon(100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%, 50% 0)",
                          backgroundColor: "#FFE249",
                          height: "254px",
                          width: "254px",
                          top: "50%",
                          left: "50%",
                          boxShadow: "0px 4px 4px ",
                          transform: "translate(-50%, -50%)", // Rotate by 90 degrees
                        }}
                      ></Box>
                      <Box
                        style={{
                          position: "absolute",
                          clipPath:
                            "polygon(100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%, 50% 0)",
                          backgroundImage: `url(${SubhroImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "222px",
                          width: "222px",
                          top: "50%",
                          left: "50%",
                          boxShadow: "0px 4px 4px",
                          transform: "translate(-50%, -50%)", // Rotate by 90 degrees
                        }}
                      ></Box>
                    </Box>
                    <Box
                      sx={{
                        maxWidth: "326px",
                        width: "100%",
                        height: "390px",
                        background: "#fff9da",
                        boxShadow: "0px 4px 4px",
                        borderRadius: "20px",
                        display: "flex",
                        marginTop: "11rem",
                        padding: "1rem",
                        [theme.breakpoints.down("xs")]: {
                          height: "380px",
                          padding: "0.5rem",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          marginTop: "7.5rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "15px",
                          alignItems: "center",
                          [theme.breakpoints.down("xs")]: {
                            gap: "10px",
                          },
                        }}
                      >
                        <Box sx={{}}>
                          <Typography
                            sx={{
                              width: "250px",
                              height: "28px",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontSize: "24px",
                              lineHeight: "normal",
                              textAlign: "center",
                              color: "#000",
                            }}
                          >
                            Subhrojyoti Mandal
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              width: "200px",
                              height: "28px",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontSize: "18px",
                              lineHeight: "normal",
                              textAlign: "center",
                              color: "#000",
                              fontWeight: 700,
                            }}
                          >
                            Co-Founder
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              width: "290px",
                              height: "150px",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontSize: "18px",
                              lineHeight: "normal",
                              textAlign: "center",
                              color: "#000",
                              [theme.breakpoints.down("xs")]: {
                                height: "100%",
                                width: "100%",
                              },
                            }}
                          >
                            Experienced Software Developer and a blockchain
                            enthusiast. Certified in Blockchain and its
                            Applications from IIT Kharagpur. Masters degree in
                            computer applications from Chandigarh University.{" "}
                            <Link to="https://www.linkedin.com/in/subhr0jy0ti/">
                              Know more
                            </Link>
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    [theme.breakpoints.down("lg")]: {
                      height: "554px",
                      width: "326px",
                      mb: "2rem",
                    },
                    [theme.breakpoints.down("xs")]: {
                      width: "280px",
                    },
                  }}
                >
                  <Box>
                    <Box
                      style={{
                        position: "relative",
                        marginTop: "10rem",
                        boxShadow: "0px 4px 4px ",
                      }}
                    >
                      <Box
                        style={{
                          position: "absolute",
                          clipPath:
                            "polygon(100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%, 50% 0)",
                          backgroundColor: "#FFE249",
                          height: "254px",
                          width: "254px",
                          top: "50%",
                          left: "50%",
                          boxShadow: "0px 4px 4px ",
                          transform: "translate(-50%, -50%)", // Rotate by 90 degrees
                        }}
                      ></Box>
                      <Box
                        style={{
                          position: "absolute",
                          clipPath:
                            "polygon(100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%, 50% 0)",
                          backgroundImage: `url(${BobbyImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "222px",
                          width: "222px",
                          top: "50%",
                          left: "50%",
                          boxShadow: "0px 4px 4px ",
                          transform: "translate(-50%, -50%)", // Rotate by 90 degrees
                        }}
                      ></Box>
                    </Box>
                    <Box
                      sx={{
                        maxWidth: "326px",
                        width: "100%",
                        height: "390px",
                        background: "#fff9da",
                        borderRadius: "20px",
                        display: "flex",
                        marginTop: "11rem",
                        boxShadow: "0px 4px 4px ",
                        padding: "1rem",
                        [theme.breakpoints.down("xs")]: {
                          height: "380px",
                          padding: "0.5rem",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          marginTop: "7.5rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "15px",
                          alignItems: "center",
                          [theme.breakpoints.down("xs")]: {
                            gap: "10px",
                          },
                        }}
                      >
                        <Box sx={{}}>
                          <Typography
                            sx={{
                              width: "250px",
                              height: "28px",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontSize: "24px",
                              lineHeight: "normal",
                              textAlign: "center",
                              color: "#000",
                            }}
                          >
                            Bobby Kumar
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              width: "250px",
                              height: "28px",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontSize: "18px",
                              lineHeight: "normal",
                              textAlign: "center",
                              color: "#000",
                              fontWeight: 700,
                            }}
                          >
                            Software Engineering Intern
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              width: "290px",
                              height: "150px",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontSize: "18px",
                              lineHeight: "normal",
                              textAlign: "center",
                              color: "#000",
                              [theme.breakpoints.down("xs")]: {
                                height: "100%",
                                width: "100%",
                              },
                            }}
                          >
                            Dedicated Frontend Developer with strong passion in
                            designing unique UI/UX that conveys the message
                            aesthetically. Masters degree focused on computer
                            applications from Chandigarh University,Punjab.{" "}
                            <Link to="https://www.linkedin.com/in/bobby-kumar-6a596122a/">
                              Know more
                            </Link>
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default Team;
