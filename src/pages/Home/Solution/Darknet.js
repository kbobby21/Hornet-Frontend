import { ThemeProvider } from "@emotion/react";
import theme from "../../../Theme/theme";
import { Box, Typography } from "@mui/material";
import DarknetImage from "../../../images/DarknetImage.png";
import CardMedia from "@mui/material/CardMedia";

const Darknet = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1500px",
          height: "800px",
          backgroundColor: "#fff",
          border: "3px solid #000",
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            padding: "2rem",
            paddingTop: "3rem",
            [theme.breakpoints.down("lg")]: {
              height: "650px",
              padding: "0rem",
              paddingTop: "0rem",
            },
            [theme.breakpoints.down("md")]: {
              padding: "0rem",
              paddingTop: "0rem",
              height: "500px",
            },
            [theme.breakpoints.down("sm")]: {
              height: "300px",
              padding: "0rem",
            },
            [theme.breakpoints.down("xs")]: {
              height: "250px",
            },
          }}
        >
          <Box
            sx={{
              padding: "4rem",
              marginRight: "4rem",
              marginLeft: "-1rem",
              marginTop: "4rem",
              [theme.breakpoints.down("xl")]: {
                padding: "0rem",
                paddingLeft: "2.5rem",
                marginRight: "0rem",
                marginLeft: "2.5rem",
                marginTop: "0rem",
              },
              [theme.breakpoints.down("lg")]: {
                padding: "0rem",
                paddingLeft: "2.5rem",
                marginRight: "0rem",
                marginLeft: "2.5rem",
                marginTop: "0rem",
              },
              [theme.breakpoints.down("md")]: {
                padding: "0rem",
                paddingLeft: "1rem",
                marginRight: "0rem",
                marginLeft: "2rem",
                marginTop: "0rem",
              },
              [theme.breakpoints.down("sm")]: {
                padding: "0rem",
                paddingLeft: "2rem",
                marginRight: "0rem",
                marginLeft: "0rem",
                marginTop: "3rem",
              },
              [theme.breakpoints.down("xs")]: {
                padding: "0rem",
                paddingLeft: "1rem",
                marginRight: "0rem",
                marginLeft: "0rem",
                marginTop: "3rem",
              },
            }}
          >
            <Typography
              sx={{
                maxWidth: "420px",
                fontFamily: "Times New Roman",
                fontWeight: 700,
                fontSize: "40px",
                padding: "1rem",
                marginBottom: "1rem",
                lineHeight: "46px",
                color: "#464646",
                [theme.breakpoints.down("lg")]: {
                  padding: "0.5rem",
                  marginBottom: "0rem",
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: "30px",
                  padding: "0.5rem",
                  marginBottom: "0rem",
                  lineHeight: "45px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "20px",
                  fontWeight: "300px",
                  padding: "0.5rem",
                  marginBottom: "0rem",
                  lineHeight: "20px",
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "20px",
                  fontWeight: "300px",
                  padding: "0.5rem",
                  marginBottom: "0rem",
                  lineHeight: "20px",
                },
              }}
            >
              Darknet Threat Intelligence
            </Typography>
            <Typography
              sx={{
                maxWidth: "450px",
                width: "350px",
                marginLeft: "1rem",
                height: "3px",
                backgroundColor: "#000",
                [theme.breakpoints.down("md")]: {
                  width: "200px",
                  marginLeft: "0.5rem",
                  height: "3px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "160px",
                  marginLeft: "0.5rem",
                  height: "1.5px",
                },
                [theme.breakpoints.down("xs")]: {
                  width: "150px",
                  marginLeft: "0.5rem",
                  height: "1.5px",
                },
              }}
            />
            <Typography
              sx={{
                maxWidth: "680px",
                fontFamily: "Arial",
                fontSize: "36px",
                lineHeight: "41px",
                color: "#000",
                marginTop: "1rem",
                padding: "1rem",
                height: "164px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "25px",
                  fontWeight: "300px",
                  marginTop: "0rem",
                  padding: "0.5rem",
                  lineHeight: "35px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "16px",
                  fontWeight: "300px",
                  marginTop: "0rem",
                  padding: "0.5rem",
                  lineHeight: "20px",
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "15px",
                  fontWeight: "300px",
                  marginTop: "0rem",
                  padding: "0.5rem",
                  lineHeight: "20px",
                },
              }}
            >
              Stay ahead of cyber threats, protect sensitive data, and mitigate
              the impact of cyberattacks.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "435px",
              height: "450px",
              objectFit: "cover",
              [theme.breakpoints.down("xl")]: {
                width: "550px",
                height: "550px",
              },
              [theme.breakpoints.down("lg")]: {
                width: "550px",
                height: "550px",
              },
              [theme.breakpoints.down("md")]: {
                width: "300px",
                height: "300px",
              },
              [theme.breakpoints.down("sm")]: {
                width: 300,
                height: 320,
              },
              [theme.breakpoints.down("xs")]: {
                width: 200,
                height: 190,
                marginTop: "20px",
              },
            }}
          >
            <CardMedia
              sx={{
                height: "456px",
                width: "372px",
                [theme.breakpoints.down("xl")]: {
                  width: "650px",
                  height: "550px",
                },
                [theme.breakpoints.down("lg")]: {
                  width: "450px",
                  height: "350px",
                },
                [theme.breakpoints.down("md")]: {
                  height: "200px",
                  width: "250px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "240px",
                  height: "200px",
                },
                [theme.breakpoints.down("xs")]: {
                  width: "140px",
                  height: "180px",
                },
              }}
              image={DarknetImage}
              title="DarknetImage"
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Darknet;
