import React from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import { ThemeProvider } from "@emotion/react";
import theme from "../../Theme/theme";
import { motion } from "framer-motion";
import BgImage from "../../images/HornetBg.png";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Layout>
          <Box width="100%" height="450px" position="relative">
            <Paper
              sx={{
                width: "100%",
                height: "450px",
                position: "absolute",

                backgroundColor: "#000",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "3rem",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "405px",
                    padding: "1rem",
                    marginTop: "2rem",
                    [theme.breakpoints.down("md")]: {
                      fontSize: "60px",
                      paddingBottom: "0.5rem",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "white",
                      fontSize: "72px",
                      fontFamily: "Times New Roman",
                      lineHeight: "83px",
                      fontWeight: 400,
                      [theme.breakpoints.down("md")]: {
                        fontSize: "60px",
                      },
                    }}
                  >
                    PRODUCTS
                  </Typography>
                </Box>
                <Box
                  sx={{
                    maxWidth: "830px",
                    padding: "1rem",

                    [theme.breakpoints.down("md")]: {
                      padding: "0rem",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "white",
                      fontSize: "20px",
                      fontFamily: "Times New Roman",
                      fontWeight: 400,
                      lineHeight: "30px",
                      wordWrap: "break-word",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "16px",
                        lineHeight: "25px",
                        marginBottom: "10px",
                      },
                    }}
                  >
                    Hornet specializes in cutting-edge solutions that empower
                    law enforcement agencies, cryptocurrency exchanges (CEXs),
                    and managed security service providers (MSSPs). The suite of
                    tools leads the market in cryptocurrency investigation and
                    dark web intelligence. Trusted globally, Hornet's innovative
                    products provide comprehensive insights and robust support,
                    enabling the clients to stay ahead in combating cyber
                    threats and uncovering illicit activities with confidence
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box
            sx={{
              width: "100%",
              minHeight: "70vh",
              backgroundImage: `url(${BgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem",
                  color: "white",
                  fontSize: 40,
                  fontFamily: "Times New Roman",
                  fontWeight: 400,
                  wordWrap: "break-word",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "20",
                    padding: "0rem 1rem",
                  },
                }}
              >
                Explore the Products
                <br />
              </Typography>
            </Box>
            <Box
              sx={{
                [theme.breakpoints.down("xl")]: {
                  marginLeft: "6rem",
                },
                [theme.breakpoints.down("lg")]: {
                  marginLeft: "2rem",
                },
                [theme.breakpoints.down("md")]: {
                  marginLeft: "5rem",
                },
                // [theme.breakpoints.down("md")]: {
                //   marginLeft: "10rem",
                // },
                [theme.breakpoints.down("sm")]: {
                  marginLeft: "0.5rem",
                },
              }}
            >
              <Grid
                container
                spacing={8}
                justifyContent="center"
                sx={{
                  padding: "1rem",
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
                          width: "100%",
                          maxWidth: 343.7,
                          height: 176,
                          left: 83.2,
                          top: 0,
                          position: "absolute",
                          background:
                            "linear-gradient(180deg, #FFF9DA 0%, #FFF8D6 92%)",
                          borderRadius: "20px",
                          boxShadow: "4px 4px 6px ",
                          padding: "0.5rem",
                          flexDirection: "column",
                          [theme.breakpoints.down("xs")]: {
                            width: "100%",
                            maxWidth: 320.7,
                          },
                        }}
                      >
                        <Link to="/documentation">
                          <Typography
                            sx={{
                              textAlign: "center",
                              color: "black",
                              fontSize: "15px",
                              marginTop: "2rem",
                              fontFamily: "Arial",
                              fontWeight: 400,
                              wordWrap: "break-word",
                              textDecoration: "underline",
                            }}
                          >
                            Get Dificulty Adjustment
                          </Typography>
                        </Link>
                        <Typography
                          sx={{
                            maxWidth: "238px",
                            height: "100%",
                            textAlign: "center",
                            color: "black",
                            fontSize: "15px",
                            fontFamily: "Arial",
                            fontWeight: 400,
                            margin: "1rem",
                            marginLeft: "3rem",
                            wordWrap: "break-word",
                          }}
                        >
                          Returns details about difficulty adjustment.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 105.98,
                          height: 100.04,
                          left: 15,
                          top: 37.98,
                          position: "absolute",
                          background:
                            "linear-gradient(90deg, #F2CB00 0%, #FFE249 96%)",
                          boxShadow: "4px 4px 6px ",
                          borderRadius: "50%",
                          padding: "1rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          [theme.breakpoints.down("xs")]: {
                            width: 100,
                            height: 95,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "black",
                            fontSize: 15,
                            fontFamily: "Arial",
                            fontWeight: 400,
                          }}
                        >
                          General
                        </Typography>
                      </Box>
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
                      },
                      [theme.breakpoints.down("sm")]: {
                        left: 0,
                      },
                      [theme.breakpoints.down("xs")]: {
                        left: 0,
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
                          width: 343.7,
                          height: 176,
                          left: 83.2,
                          top: 0,
                          position: "absolute",
                          background:
                            "linear-gradient(180deg, #FFF9DA 0%, #FFF8D6 92%)",
                          borderRadius: "20px",
                          boxShadow: "4px 4px 6px ",
                          padding: "0.5rem",
                          [theme.breakpoints.down("xs")]: {
                            width: "100%",
                            maxWidth: 320.7,
                          },
                        }}
                      >
                        <Link to="/documentation">
                          <Typography
                            sx={{
                              textAlign: "center",
                              color: "black",
                              fontSize: "15px",
                              marginTop: "2rem",
                              fontFamily: "Arial",
                              fontWeight: 400,
                              wordWrap: "break-word",
                              textDecoration: "underline",
                            }}
                          >
                            GET Address
                          </Typography>
                        </Link>
                        <Typography
                          sx={{
                            maxWidth: "238px",
                            height: "100%",
                            textAlign: "center",
                            color: "black",
                            fontSize: "15px",
                            fontFamily: "Arial",
                            fontWeight: 400,
                            margin: "1rem",
                            marginLeft: "3rem",
                            wordWrap: "break-word",
                          }}
                        >
                          Returns details about an address.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 105.98,
                          height: 100.04,
                          left: 15,
                          top: 37.98,
                          position: "absolute",
                          background:
                            "linear-gradient(90deg, #F2CB00 0%, #FFE249 96%)",
                          boxShadow: "4px 4px 6px ",
                          borderRadius: "50%",
                          padding: "1rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          [theme.breakpoints.down("xs")]: {
                            width: 100,
                            height: 95,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "black",
                            fontSize: 15,
                            fontFamily: "Arial",
                            fontWeight: 400,
                            wordWrap: "break-word",
                          }}
                        >
                          Addresses
                        </Typography>
                      </Box>
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
                          width: 343.7,
                          height: 176,
                          left: 83.2,
                          top: 0,
                          position: "absolute",
                          background:
                            "linear-gradient(180deg, #FFF9DA 0%, #FFF8D6 92%)",
                          borderRadius: "20px",
                          boxShadow: "4px 4px 6px ",
                          padding: "0.5rem",
                          [theme.breakpoints.down("xs")]: {
                            width: "100%",
                            maxWidth: 320.7,
                          },
                        }}
                      >
                        <Link to="/documentation">
                          <Typography
                            sx={{
                              textAlign: "center",
                              color: "black",
                              fontSize: "15px",
                              marginTop: "2rem",
                              fontFamily: "Arial",
                              fontWeight: 400,
                              wordWrap: "break-word",
                              textDecoration: "underline",
                            }}
                          >
                            GET Address Transactions
                          </Typography>
                        </Link>
                        <Typography
                          sx={{
                            maxWidth: "238px",
                            height: "100%",
                            textAlign: "center",
                            color: "black",
                            fontSize: "15px",
                            fontFamily: "Arial",
                            fontWeight: 400,
                            margin: "1rem",
                            marginLeft: "3rem",
                            wordWrap: "break-word",
                          }}
                        >
                          Get transaction history for the specified
                          address/scripthash, sorted with newest first.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 105.98,
                          height: 100.04,
                          left: 15,
                          top: 37.98,
                          position: "absolute",
                          background:
                            "linear-gradient(90deg, #F2CB00 0%, #FFE249 96%)",
                          boxShadow: "4px 4px 6px ",
                          borderRadius: "50%",
                          padding: "1rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          [theme.breakpoints.down("xs")]: {
                            width: 100,
                            height: 95,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "black",
                            fontSize: 15,
                            fontFamily: "Arial",
                            fontWeight: 400,
                            wordWrap: "break-word",
                          }}
                        >
                          Addresses
                        </Typography>
                      </Box>
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
                      },
                      [theme.breakpoints.down("sm")]: {
                        left: 0,
                      },
                      [theme.breakpoints.down("xs")]: {
                        left: 0,
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
                          width: 343.7,
                          height: 176,
                          left: 83.2,
                          top: 0,
                          position: "absolute",
                          background:
                            "linear-gradient(180deg, #FFF9DA 0%, #FFF8D6 92%)",
                          borderRadius: "20px",
                          boxShadow: "4px 4px 6px ",
                          padding: "0.5rem",
                          [theme.breakpoints.down("xs")]: {
                            width: "100%",
                            maxWidth: 320.7,
                          },
                        }}
                      >
                        <Link to="/documentation">
                          <Typography
                            sx={{
                              textAlign: "center",
                              color: "black",
                              fontSize: "15px",
                              marginTop: "2rem",
                              fontFamily: "Arial",
                              fontWeight: 400,
                              wordWrap: "break-word",
                              textDecoration: "underline",
                            }}
                          >
                            GET Address Transactions Chain
                          </Typography>
                        </Link>
                        <Typography
                          sx={{
                            maxWidth: "238px",
                            height: "100%",
                            textAlign: "center",
                            color: "black",
                            fontSize: "15px",
                            fontFamily: "Arial",
                            fontWeight: 400,
                            margin: "1rem",
                            marginLeft: "3rem",
                            wordWrap: "break-word",
                          }}
                        >
                          Get confirmed transaction history for the specified
                          address/scripthash, sorted with newest first.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 105.98,
                          height: 100.04,
                          left: 15,
                          top: 37.98,
                          position: "absolute",
                          background:
                            "linear-gradient(90deg, #F2CB00 0%, #FFE249 96%)",
                          boxShadow: "4px 4px 6px ",
                          borderRadius: "50%",
                          padding: "1rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          [theme.breakpoints.down("xs")]: {
                            width: 100,
                            height: 95,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "black",
                            fontSize: 15,
                            fontFamily: "Arial",
                            fontWeight: 400,
                            wordWrap: "break-word",
                          }}
                        >
                          Addresses
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default Products;
