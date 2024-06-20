import React, { useState, useEffect, useMemo } from "react";
import theme from "../../../Theme/theme";
import { Box, Typography, IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CFT from "./CFT";
import ASM from "./ASM";
import Darknet from "./Darknet";
import GDPR from "./GDPR";
import Wallet from "./Wallet";

const Solution = () => {
  const [index, setIndex] = useState(0);

  const components = useMemo(
    () => [<Wallet />, <ASM />, <Darknet />, <GDPR />, <CFT />],
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [components]);

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#EDEDED",
          position: "relative",
          width: "100%",
          padding: "1rem",
          [theme.breakpoints.down("lg")]: {
            minHeight: "90vh",
          },
          [theme.breakpoints.down("md")]: {
            minHeight: "75vh",
          },
          [theme.breakpoints.down("sm")]: {
            minHeight: "55vh",
          },
          [theme.breakpoints.down("xs")]: {
            minHeight: "50vh",
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
            alignItems: "center",
            padding: "20px",
            [theme.breakpoints.down("xs")]: {
              padding: "0px",
            },
          }}
        >
          Our Features
        </Typography>

        {components.map((comp, idx) => (
          <Box
            key={idx}
            component="div"
            sx={{
              // Adjust styles based on your requirements for the Reach component
              width: "100%",
              maxWidth: "1500px",
              height: "800px",
              [theme.breakpoints.down("lg")]: {
                height: "650px",
              },
              [theme.breakpoints.down("md")]: {
                height: "500px",
              },
              [theme.breakpoints.down("sm")]: {
                height: "300px",
              },
              [theme.breakpoints.down("xs")]: {
                height: "250px",
              },
              margin: "auto auto",
              boxShadow: "0px 4px 15px 5px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px",
              transition: "opacity 0.5s ease-in-out",
              display: idx === index ? "block" : "none",
            }}
          >
            {comp}
          </Box>
        ))}

        <IconButton
          sx={{
            position: "absolute",
            left: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            [theme.breakpoints.down("lg")]: {
              left: "10px",
            },
            [theme.breakpoints.down("md")]: {
              left: "10px",
            },
            [theme.breakpoints.down("sm")]: {
              left: "0px",
            },
            [theme.breakpoints.down("xs")]: {
              left: "0px",
              top: "55%",
            },
          }}
        >
          <NavigateBeforeIcon
            onClick={handlePrev}
            sx={{
              fontSize: "5rem",
              color: "#000",
              [theme.breakpoints.down("sm")]: {
                fontSize: "3rem",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "3rem",
              },
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            right: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            [theme.breakpoints.down("lg")]: {
              right: "10px",
            },
            [theme.breakpoints.down("md")]: {
              right: "10px",
            },
            [theme.breakpoints.down("sm")]: {
              right: "0px",
            },
            [theme.breakpoints.down("xs")]: {
              right: "0px",
              top: "55%",
            },
          }}
        >
          <NavigateNextIcon
            onClick={handleNext}
            sx={{
              fontSize: "5rem",
              color: "#000",
              [theme.breakpoints.down("sm")]: {
                fontSize: "3rem",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "3rem",
              },
            }}
          />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
};

export default Solution;
