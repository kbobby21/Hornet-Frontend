import React from "react";
import { Typography } from "@mui/material";
import dungeonImage from "../../images/HornetBg.png";
import theme from "../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";

function Contenthornet() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${dungeonImage})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            padding: "20px",
            width: "100%",
            marginTop: "20px",
            maxWidth: "800px",
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
              marginTop: "50px",
            },
          }}
        >
          <Typography
            sx={{
              color: theme.palette.secondary.main,
              fontSize: "3rem",
              fontFamily: theme.typography.fontFamily,
              fontStyle: "bold",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            What is Hornet?
          </Typography>

          <Typography
            sx={{
              color: "#ffe249",
              fontSize: "1.5rem",
              fontFamily: theme.typography.fontFamily,
            }}
          >
            "Hornet" is the wasp which can see in the dark and we the "Hornet"
            can see in the dark-web!
          </Typography>
          <br />
          <br />
          <Typography
            sx={{
              color: theme.palette.secondary.main,
              fontSize: "1.5rem",
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Cryptocurrency will definitely revolutionize fintech, finance and
            payment services in the future, and we have already started to feel
            the heat. But unfortunately, it has been maligned due to a lack of
            any methods to check for illicit activities, although privacy and
            anonymity are great there needs to be a balance for it to
            proliferate for the greater good. We, at Hornet, are building
            India's first dark web cryptocurrency regulation platform to prevent
            illicit activities and help make privacy and anonymity strive for
            their ideal place in the world.
            <br />
            <br />
            Hornet monitors the darkweb for illicit activites and the crpto
            wallets taking payments for them. Using our powerful AI powered
            algorithm, Hornet can deface the person behind such wallets and take
            necessary action.
          </Typography>
          <Typography
            sx={{
              color: theme.palette.secondary.main,
              fontSize: "1.5rem",
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Stay ahead of the curve in the fight against cybercrime with our
            constantly updated and extensible platform.
            <br />
            <br />
          </Typography>
          <Typography
            sx={{
              color: theme.palette.secondary.main,
              fontSize: "1.5rem",
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Please Join the Waitlist below to get the latest updates on our
            process of development and hear it first when the product is ready!
          </Typography>
          <div></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Contenthornet;
