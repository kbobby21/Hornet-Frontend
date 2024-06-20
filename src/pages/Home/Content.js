import React from "react";
import { Typography } from "@mui/material";
import Image from "../../images/HornetBg.png"; // import your image file
import { ThemeProvider } from "@emotion/react";
import theme from "../../Theme/theme";
import Layout from "../../components/Layout/Layout";
import Contenthornet from "./Contenthornet";

const Content = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              padding: "20px",
              width: "100%",
              marginTop: "20px",
              maxWidth: "800px",
              margin: "0.5rem",
              textAlign: "center",
              [theme.breakpoints.down("sm")]: {
                marginTop: "50px",
              },
            }}
          >
            <Typography
              style={{
                textAlign: "center",
                marginBottom: "5px",
                color: "#ffe249",
                fontSize: "2.5rem",
                marginTop: "3rem",
                fontFamily: theme.typography.fontFamily,
                maxWidth: "100%",
              }}
            >
              DARK WEB
            </Typography>
            <Typography
              style={{
                color: theme.palette.secondary.main,
                fontSize: "1.5rem",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              The dark web is a hidden corner of the internet that's only
              accessible through special software, like Tor. It is a subset of
              Deep Web which comprises ~95% of the entire internet! It's a place
              where illegal activities thrive such as drug trafficking,
              cross-border terrorism, human trafficking, the sale of stolen
              personal information, etc. These activities have a devastating
              impact on society, and it's important that we understand what's
              going on in this hidden world.
            </Typography>
            <br />
            <Typography
              style={{
                textAlign: "center",
                marginBottom: "5px",
                color: "#ffe249",
                fontSize: "2.5rem",
                fontFamily: theme.typography.fontFamily,
                maxWidth: "100%",
                padding: "5px",
              }}
            >
              Cryptocurrency
            </Typography>
            <Typography
              style={{
                color: theme.palette.secondary.main,
                fontSize: "1.5rem",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Cryptocurrency is a decentralized form of currency which can't be
              regulated by any central authority and neither can be stopped. It
              provides an armor of privacy and anonymity to the users. This is
              simply revolutionary!
            </Typography>
            <br />
            <Typography
              style={{
                textAlign: "center",
                marginBottom: "5px",
                color: "#ffe249",
                fontSize: "2.5rem",
                fontFamily: theme.typography.fontFamily,
                maxWidth: "100%",
              }}
            >
              Darkweb + Cryptocurrency
            </Typography>
            <Typography
              style={{
                color: theme.palette.secondary.main,
                fontSize: "1.5rem",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              But unfortunately, criminals are misusing this anonymity crypto
              provides and using it as a shield against law enforcement!
              Transactions on the dark web are often conducted using
              cryptocurrency, making it even harder to trace.
              <br />
              Hence, by combining the power of the dark web and cryptocurrency,
              it becomes a safe haven for criminals to conduct their businesses.
            </Typography>
          </div>
        </div>
        <Contenthornet />
      </Layout>
    </ThemeProvider>
  );
};

export default Content;
