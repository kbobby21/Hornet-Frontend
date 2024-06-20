import { ThemeProvider } from "@emotion/react";
import theme from "../../../Theme/theme";
import { Box, Typography } from "@mui/material";
import WalletImage from "../../../images/WalletImage.png";
import CardMedia from "@mui/material/CardMedia";

const Wallet = () => {
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
            },
            [theme.breakpoints.down("xs")]: {
              height: "250px",
            },
          }}
        >
          <Box
            sx={{
              padding: "4rem",
              marginRight: "2rem",
              marginLeft: "4rem",
              marginTop: "2.5rem",
              [theme.breakpoints.down("lg")]: {
                padding: "0rem",
                paddingLeft: "2.5rem",
                marginRight: "0rem",
                marginLeft: "2.5rem",
                marginTop: "0rem",
              },
              [theme.breakpoints.down("md")]: {
                padding: "0rem",
                paddingLeft: "2rem",
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
                maxWidth: "870px",
                fontFamily: "Times New Roman",
                fontWeight: 700,
                fontSize: "40px",
                padding: "1rem",
                marginBottom: "1rem",
                lineHeight: "46px",
                color: "#464646",
                [theme.breakpoints.down("lg")]: {
                  fontSize: "30px",
                  padding: "0.5rem",
                  marginBottom: "0rem",
                  lineHeight: "45px",
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
              Analyse Wallet
            </Typography>
            <Typography
              sx={{
                MaxWidth: "450px",
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
                  width: "160px",
                  marginLeft: "0.5rem",
                  height: "1.5px",
                },
              }}
            />
            <Typography
              sx={{
                maxWidth: "450px",
                fontFamily: "Arial",
                fontSize: "36px",
                lineHeight: "41px",
                color: "#000",
                marginTop: "1rem",
                padding: "1rem",
                height: "164px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "30px",
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
              Track any movement of a wallet in real-time and trace its origin.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "435px",
              height: "450px",
              objectFit: "cover",
              padding: "2rem",
              [theme.breakpoints.down("lg")]: {
                width: 500,
                height: 515,
                marginRight: "2.5rem",
                padding: "0rem 0rem",
                paddingRight: "2.5rem",
              },
              [theme.breakpoints.down("md")]: {
                width: 350,
                height: 350,
                marginRight: "2rem",
                padding: "0rem 0rem",
              },
              [theme.breakpoints.down("sm")]: {
                width: 250,
                height: 250,
                marginRight: "15px",
                padding: "1rem 1.5rem",
              },
              [theme.breakpoints.down("xs")]: {
                width: 200,
                height: 190,
                marginRight: "20px",
                padding: "1rem 0.5rem",
              },
            }}
          >
            <CardMedia
              sx={{
                height: 520,
                width: 500,
                [theme.breakpoints.down("md")]: {
                  width: 450,
                  height: 465,
                },
                [theme.breakpoints.down("md")]: {
                  width: 280,
                  height: 300,
                },
                [theme.breakpoints.down("sm")]: {
                  width: 180,
                  height: 195,
                },
                [theme.breakpoints.down("xs")]: {
                  width: 110,
                  height: 125,
                },
              }}
              image={WalletImage}
              title="WalletImage"
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Wallet;
