import React, { Suspense } from "react";
import "../../styles/Parallax.css";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import Header from "../../components/Layout/Header";
import Image from "../../images/HornetBg.png";
import theme from "../../Theme/theme";
import Reach from "../Home/Reach";
import Solution from "../Home/Solution/Solution";
import Subscribe from "../Home/Subscribe";
import { useNavigate } from "react-router-dom";
import News from "../Home/News/News";
import Incubation from "../Home/Incubation";
import Feature from "../Home/Solution/Feature";
function Parallax() {
  const navigate = useNavigate();

  const handleDemo = () => {
    navigate("/requestDemo");
  };

  const handleLearn = () => {
    navigate("/learnmore");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Layout>
          <div className="wrapper">
            <div className="content">
              <Box
                sx={{
                  display: "flex",
                  padding: "20px",
                  minHeight: "100vh",
                  backgroundImage: `url(${Image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Box>
                  <Header />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "1rem ",
                      marginLeft: "5rem",
                      [theme.breakpoints.down("md")]: {
                        marginLeft: "0rem",
                      },
                      [theme.breakpoints.down("sm")]: {
                        marginLeft: "0rem",
                      },
                      [theme.breakpoints.down("xs")]: {
                        marginLeft: "0rem",
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          maxWidth: "792px",
                          width: "100%",
                          height: "257px",
                          fontFamily: "Times New Roman",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "60px",
                          lineHeight: "69px",
                          color: "#EFEFEF",
                          textAlign: "left",
                          [theme.breakpoints.down("md")]: {
                            fontWeight: 600,
                            fontSize: "55px",
                            lineHeight: "65px",
                          },
                          [theme.breakpoints.down("sm")]: {
                            fontWeight: 550,
                            fontSize: "45px",
                            lineHeight: "60px",
                          },
                          [theme.breakpoints.down("xs")]: {
                            fontWeight: 500,
                            fontSize: "40px",
                            lineHeight: "55px",
                            marginTop: "22px",
                          },
                        }}
                      >
                        Navigating the{" "}
                        <span style={{ color: "#FFE249" }}>Blockchain</span>{" "}
                        frontier and Illuminating the{" "}
                        <span style={{ color: "#FFE249" }}>Darknet</span>{" "}
                        Shadows
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          maxWidth: "792px",
                          width: "100%",
                          height: "152px",
                          fontFamily: "Times New Roman",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "32px",
                          lineHeight: "37px",
                          color: "#DEDADA",
                          [theme.breakpoints.down("md")]: {
                            fontWeight: 350,
                            fontSize: "30px",
                            lineHeight: "35px",
                            maxWidth: "792px",
                            width: "100%",
                            marginTop: "2rem",
                          },
                          [theme.breakpoints.down("sm")]: {
                            fontWeight: 300,
                            fontSize: "28px",
                            lineHeight: "33px",
                            marginTop: "4rem",
                            maxWidth: "792px",
                            width: "100%",
                          },
                          [theme.breakpoints.down("xs")]: {
                            fontWeight: 250,
                            fontSize: "26px",
                            lineHeight: "31px",
                            marginTop: "6rem",
                            maxWidth: "792px",
                            width: "100%",
                          },
                        }}
                      >
                        Unleash the power of Blockchain Analysis and master the
                        shadows of Darknet
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        maxWidth: "792px",
                        width: "100%",
                      }}
                    >
                      <Button
                        onClick={handleLearn}
                        sx={{
                          borderRadius: "50px",
                          width: "238px",
                          height: "69px",
                          background:
                            "linear-gradient(198.21deg, #FFE249 5.8%, rgba(240, 205, 19, 0.61) 173.06%)",
                          boxShadow: "3px 3px 3px rgba(238, 238, 238, 0.25)",
                          color: "#000",
                          textTransform: "capitalize",
                          fontSize: "20px",
                          [theme.breakpoints.down("md")]: {
                            width: "210px",
                            height: "55px",
                            fontSize: "18px",
                          },
                          [theme.breakpoints.down("sm")]: {
                            width: "200px",
                            height: "60px",
                          },
                          [theme.breakpoints.down("xs")]: {
                            width: "200px",
                            height: "60px",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                      <Button
                        onClick={handleDemo}
                        sx={{
                          borderRadius: "50px",
                          boxSizing: "border-box",
                          width: "238px",
                          height: "69px",
                          marginLeft: "4rem",
                          border: "1.5px solid #FFE249",
                          color: "#fff",
                          textTransform: "capitalize",
                          fontSize: "20px",
                          [theme.breakpoints.down("md")]: {
                            marginLeft: "1rem",
                            width: "210px",
                            height: "55px",
                            fontSize: "18px",
                          },
                          [theme.breakpoints.down("sm")]: {
                            marginLeft: "0rem",
                            marginTop: "1.5rem",
                            width: "200px",
                            height: "60px",
                            fontSize: "18px",
                          },
                          [theme.breakpoints.down("xs")]: {
                            marginLeft: "0rem",
                            marginTop: "1.5rem",
                            width: "200px",
                            height: "60px",
                            fontSize: "18px",
                          },
                        }}
                      >
                        Request a demo
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Suspense fallback={<div>Loading ....</div>}>
                <Feature />
                {/* <Solution /> */}
                <Reach />
                <Incubation />
                <News />
                <Subscribe />
              </Suspense>
            </div>
          </div>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
}

export default Parallax;
