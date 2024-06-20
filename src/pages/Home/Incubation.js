import React from "react";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../Theme/theme";
import BImage from "../../images/BCCI.jpeg";
import ISIimage from "../../images/ISI.jpg";
import IIMimage from "../../images/IIM.jpg";

const Incubation = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "55vh",
          backgroundColor: "#f2f2f2",
          // backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "1.5rem",
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Times New Roman",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "40px",
              color: "#000000",
              [theme.breakpoints.down("xs")]: {
                fontWeight: 700,
                fontSize: "33px",
              },
            }}
          >
            We are incubated at
            {/* Our Incubation */}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            sx={{
              [theme.breakpoints.up("lg")]: {
                padding: "1.5rem 10rem",
              },
              [theme.breakpoints.down("lg")]: {
                padding: "1rem 3rem",
              },

              [theme.breakpoints.down("md")]: {
                padding: "1rem 15rem",
              },
              [theme.breakpoints.down("sm")]: {
                padding: "1rem 3rem",
              },
              [theme.breakpoints.down("xs")]: {
                padding: "1rem 2.2rem",
              },
            }}
          >
            <Grid item>
              <Card
                sx={{
                  height: "350px",
                  width: "350px",
                  boxShadow: "0px 4px 15px 0px #000",
                  borderRadius: "16px",
                  [theme.breakpoints.down("xs")]: {
                    height: "250px",
                    width: "250px",
                  },
                  "&:hover": {
                    boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
                    transition: "all .25s linear",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={BImage}
                  alt="BCCI Image"
                  onClick={() =>
                    window.open(
                      "https://www.bengalchamber.com/techincubation/index.html"
                    )
                  }
                  sx={{
                    borderRadius: "16px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                ></CardMedia>
              </Card>
            </Grid>

            <Grid item>
              <Card
                sx={{
                  height: "350px",
                  width: "350px",
                  boxShadow: "0px 4px 15px 0px #000",
                  borderRadius: "16px",
                  [theme.breakpoints.down("xs")]: {
                    height: "250px",
                    width: "250px",
                  },
                  "&:hover": {
                    boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
                    transition: "all .25s linear",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={IIMimage}
                  alt="IIM Image"
                  onClick={() =>
                    window.open(
                      "https://www.iimcal.ac.in/faculty/centers-of-excellence/centre-for-entrepreneurship-innovation/iim-calcutta-innovation-park"
                    )
                  }
                  sx={{
                    borderRadius: "16px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                ></CardMedia>
              </Card>
            </Grid>

            <Grid item>
              <Card
                sx={{
                  height: "350px",
                  width: "350px",
                  boxShadow: "0px 4px 15px 0px #000",
                  borderRadius: "16px",
                  [theme.breakpoints.down("xs")]: {
                    height: "250px",
                    width: "250px",
                  },
                  "&:hover": {
                    boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
                    transition: "all .25s linear",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={ISIimage}
                  alt="ISI Image"
                  onClick={() => window.open("https://www.ideas-tih.org/")}
                  sx={{
                    borderRadius: "16px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                ></CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Incubation;
