import { ThemeProvider } from "@emotion/react";
import theme from "../../../Theme/theme";
import { Box, Typography } from "@mui/material";
import CFTImage from "../../../images/CFT.png";
import CardMedia from "@mui/material/CardMedia";

const CFT = () => {
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
            [theme.breakpoints.down("xl")]: {
              marginLeft: "5rem",
              paddingTop: "1rem",
            },

            [theme.breakpoints.down("lg")]: {
              height: "650px",
              marginLeft: "5rem",
              paddingTop: "0rem",
            },
            [theme.breakpoints.down("md")]: {
              marginLeft: "2.5rem",
              marginTop: "0rem",
              height: "500px",
            },
            [theme.breakpoints.down("sm")]: {
              height: "300px",
              marginLeft: "2rem",
              marginTop: "1rem",
            },
            [theme.breakpoints.down("xs")]: {
              height: "250px",
              marginLeft: "2rem",
              marginTop: "1.5rem",
            },
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                maxWidth: "870px",
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
                  fontSize: "36px",
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: "25px",
                  padding: "0.5rem",
                  marginBottom: "0rem",
                  lineHeight: "45px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "16px",
                  fontWeight: "300px",
                  padding: "0.5rem",
                  marginBottom: "0rem",
                  lineHeight: "20px",
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "14px",
                  fontWeight: "300px",
                  padding: "0.5rem",
                  marginBottom: "0rem",
                  lineHeight: "20px",
                },
              }}
            >
              Anti Money Laundering (AML), Counter Terrorism Financing (CFT) and
              Sanctions Compliance
            </Typography>
            <Typography
              sx={{
                MaxWidth: "450px",
                width: "500px",
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
                maxWidth: "523px",
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
                  fontSize: "17px",
                  fontWeight: "300px",
                  marginTop: "0rem",
                  padding: "0.5rem",
                  lineHeight: "20px",
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "14px",
                  fontWeight: "300px",
                  marginTop: "0rem",
                  padding: "0.5rem",
                  lineHeight: "20px",
                },
              }}
            >
              Check if your users are complying to regulations and perform KYT
              with ease.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "435px",
              height: "450px",
              objectFit: "cover",
              marginTop: "100px",
              [theme.breakpoints.down("xl")]: {
                width: "550px",
                height: "550px",
                marginTop: "80px",
                marginRight: "2rem",
              },
              [theme.breakpoints.down("lg")]: {
                width: "550px",
                height: "550px",
                marginTop: "65px",
              },
              [theme.breakpoints.down("md")]: {
                width: "300px",
                height: "300px",
                marginTop: "0px",
              },
              [theme.breakpoints.down("sm")]: {
                width: 300,
                height: 320,
                marginTop: "75px",
              },
              [theme.breakpoints.down("xs")]: {
                width: 300,
                height: 320,
                marginTop: "115px",
              },
            }}
          >
            <CardMedia
              sx={{
                height: "456px",
                width: "372px",
                [theme.breakpoints.down("xl")]: {
                  width: "550px",
                  height: "550px",
                },
                [theme.breakpoints.down("lg")]: {
                  width: "500px",
                  height: "500px",
                },
                [theme.breakpoints.down("md")]: {
                  height: "300px",
                  width: "300px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "180px",
                  height: "200px",
                },
                [theme.breakpoints.down("xs")]: {
                  width: "140px",
                  height: "140px",
                },
              }}
              image={CFTImage}
              title="CFTImage"
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default CFT;
