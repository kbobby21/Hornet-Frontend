import React from "react";
import theme from "../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";
import Image1 from "../../images/image (1).png";
import Image2 from "../../images/image (4).png";
import Image3 from "../../images/image (3).png";
import BgImage from "../../images/OurReachBg.jpg";
import Image4 from "../../images/mssp.png";

const Reach = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          padding: "20px",
          minHeight: "100vh",
          height: "100%",
          position: "relative",
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          [theme.breakpoints.down("md")]: {
            minHeight: "170vh",
          },
          [theme.breakpoints.down("sm")]: {
            minHeight: "170vh",
          },
          [theme.breakpoints.down("xs")]: {
            minHeight: "200vh",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Times New Roman",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "40px",
            color: "#000000",
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down("xs")]: {
              fontSize: "33px",
            },
          }}
        >
          Our Reach
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            minHeight: "100%",
            justifyContent: "center",
            padding: "2rem",
            [theme.breakpoints.down("xl")]: {
              marginLeft: "6rem",
              padding: "0rem",
            },
            [theme.breakpoints.down("lg")]: {
              marginLeft: "4rem",
              padding: "0rem",
            },
            [theme.breakpoints.down("md")]: {
              marginLeft: "13rem",
              padding: "0rem",
            },
            [theme.breakpoints.down("sm")]: {
              marginLeft: "1rem",
              padding: "0rem",
            },
            [theme.breakpoints.down("xs")]: {
              marginLeft: "1rem",
              padding: "0rem",
            },
          }}
        >
          <Grid
            container
            spacing={8}
            justifyContent="center"
            sx={{
              padding: "1rem",
              [theme.breakpoints.down("lg")]: {
                paddingTop: "0rem",
              },
              [theme.breakpoints.down("md")]: {
                paddingTop: "0rem",
              },
              [theme.breakpoints.down("sm")]: {
                paddingTop: "0rem",
              },
            }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                sx={{
                  width: 426.9,
                  height: 176,
                  position: "relative",
                  [theme.breakpoints.down("xl")]: {
                    right: -100,
                  },
                  [theme.breakpoints.down("lg")]: {
                    right: 0,
                  },
                  [theme.breakpoints.down("md")]: {
                    right: 0,
                  },
                  [theme.breakpoints.down("sm")]: {
                    right: 0,
                  },
                  [theme.breakpoints.down("xs")]: {
                    right: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 426.9,
                    height: 176,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "454px",
                      height: "291px",
                      left: 0,
                      top: 83,
                      position: "absolute",
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 15px 5px rgba(0, 0, 0, 0.2)",
                      borderRadius: "20px",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",

                      [theme.breakpoints.down("sm")]: {
                        width: "400px",
                        margin: "2rem",
                      },
                      [theme.breakpoints.down("xs")]: {
                        width: "350px",
                        margin: "2rem ",
                      },
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{
                        fontFamily: "Times New Roman",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "28px",
                        padding: "15px",
                      }}
                    >
                      Goverment Agencies
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Times New Roman",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "23px",
                        textAlign: "center",
                      }}
                    >
                      Examine cryptocurrency-related criminal activities, trace
                      stolen digital assets, and pinpoint the individuals
                      involved. Create comprehensive reports suitable for use as
                      evidence and to bolster expert witness testimonies in
                      legal proceedings.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      width: "120px",
                      height: "120px",
                      left: 210,
                      transform: "translateX(-50%)",
                      top: 33,
                      border: "3px solid #000000",
                      background: "#FFFFFF",
                      borderRadius: "50%",
                      backgroundImage: `url(${Image1})`,
                      backgroundSize: "64%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      [theme.breakpoints.down("sm")]: {
                        top: 60,
                        left: 230,
                      },
                      [theme.breakpoints.down("xs")]: {
                        top: 60,
                        left: 210,
                        width: "100px",
                        height: "100px",
                      },
                    }}
                  ></Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  width: 426.9,
                  height: 176,
                  position: "relative",
                  [theme.breakpoints.down("xl")]: {
                    left: -100,
                  },
                  [theme.breakpoints.down("lg")]: {
                    left: 0,
                  },
                  [theme.breakpoints.down("md")]: {
                    left: 0,
                    top: 120,
                  },
                  [theme.breakpoints.down("sm")]: {
                    left: 0,
                    marginTop: "1rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    left: 0,
                    marginTop: "1rem",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 426.9,
                    height: 176,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "454px",
                      height: "291px",
                      left: 0,
                      top: 83,
                      position: "absolute",
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 15px 5px rgba(0, 0, 0, 0.2)",
                      borderRadius: "20px",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      [theme.breakpoints.down("sm")]: {
                        width: "400px",
                        margin: "2rem",
                      },
                      [theme.breakpoints.down("xs")]: {
                        width: "350px",
                        margin: "2rem ",
                      },
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{
                        fontFamily: "Times New Roman",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "28px",
                        padding: "15px",
                      }}
                    >
                      Financial Institution
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Times New Roman",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "23px",
                        textAlign: "center",
                      }}
                    >
                      Comprehend, assess, and minimize the risk associated with
                      Anti-Money Laundering (AML) exposure and counterparty risk
                      in both cryptocurrency and traditional fiat transactions.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      width: "120px",
                      height: "120px",
                      left: 210,
                      transform: "translateX(-50%)",
                      top: 33,
                      border: "3px solid #000000",
                      background: "#FFFFFF",
                      borderRadius: "50%",
                      backgroundImage: `url(${Image2})`,
                      backgroundSize: "64%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      [theme.breakpoints.down("sm")]: {
                        top: 60,
                        left: 230,
                      },
                      [theme.breakpoints.down("xs")]: {
                        top: 60,
                        left: 210,
                        width: "100px",
                        height: "100px",
                      },
                    }}
                  ></Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                sx={{
                  width: 426.9,
                  height: 176,
                  position: "relative",
                  [theme.breakpoints.down("xl")]: {
                    right: -100,
                    top: 140,
                  },
                  [theme.breakpoints.down("lg")]: {
                    left: 0,
                    top: 120,
                  },
                  [theme.breakpoints.down("md")]: {
                    left: 0,
                    top: 240,
                  },
                  [theme.breakpoints.down("sm")]: {
                    left: 0,
                    marginTop: "1rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    left: 0,
                    marginTop: "1rem",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 426.9,
                    height: 176,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "454px",
                      height: "291px",
                      left: 0,
                      top: 83,
                      position: "absolute",
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 15px 5px rgba(0, 0, 0, 0.2)",
                      borderRadius: "20px",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      [theme.breakpoints.down("sm")]: {
                        width: "400px",
                        margin: "2rem",
                      },
                      [theme.breakpoints.down("xs")]: {
                        width: "350px",
                        margin: "2rem ",
                      },
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{
                        fontFamily: "Times New Roman",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "28px",
                        padding: "15px",
                      }}
                    >
                      Centralised Exchanges
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Times New Roman",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "23px",
                        textAlign: "center",
                      }}
                    >
                      Leverage the potential of blockchain data to strengthen
                      security, reduce risk, and establish and maintain customer
                      trust.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      width: "120px",
                      height: "120px",
                      left: 210,
                      transform: "translateX(-50%)",
                      top: 33,
                      border: "3px solid #000000",
                      background: "#FFFFFF",
                      borderRadius: "50%",
                      backgroundImage: `url(${Image3})`,
                      backgroundSize: "64%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      [theme.breakpoints.down("sm")]: {
                        top: 60,
                        left: 230,
                      },
                      [theme.breakpoints.down("xs")]: {
                        top: 60,
                        left: 210,
                        width: "100px",
                        height: "100px",
                      },
                    }}
                  ></Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  width: 426.9,
                  height: 176,
                  position: "relative",
                  [theme.breakpoints.down("xl")]: {
                    left: -100,
                    top: 140,
                  },
                  [theme.breakpoints.down("lg")]: {
                    left: 0,
                    top: 120,
                  },
                  [theme.breakpoints.down("md")]: {
                    left: 0,
                    top: 360,
                  },
                  [theme.breakpoints.down("sm")]: {
                    left: 0,
                    marginTop: "1rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    left: 0,
                    marginTop: "1rem",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 426.9,
                    height: 176,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "454px",
                      height: "291px",
                      left: 0,
                      top: 83,
                      position: "absolute",
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 15px 5px rgba(0, 0, 0, 0.2)",
                      borderRadius: "20px",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      [theme.breakpoints.down("sm")]: {
                        width: "400px",
                        margin: "2rem",
                      },
                      [theme.breakpoints.down("xs")]: {
                        width: "350px",
                        margin: "2rem ",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Times New Roman",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "28px",
                        padding: "15px",
                      }}
                    >
                      MSSPs and Corporates
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Times New Roman",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "23px",
                        textAlign: "center",
                      }}
                    >
                      Empower MSSPs and corporations with extensive data
                      collection and analysis to proactively identify and
                      mitigate cybersecurity threats, ensuring robust digital
                      defenses.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      width: "120px",
                      height: "120px",
                      left: 210,
                      transform: "translateX(-50%)",
                      top: 33,
                      border: "3px solid #000000",
                      background: "#FFFFFF",
                      borderRadius: "50%",
                      backgroundImage: `url(${Image4})`,
                      backgroundSize: "64%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      [theme.breakpoints.down("sm")]: {
                        top: 60,
                        left: 230,
                      },
                      [theme.breakpoints.down("xs")]: {
                        top: 60,
                        left: 210,
                        width: "100px",
                        height: "100px",
                      },
                    }}
                  ></Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Reach;
