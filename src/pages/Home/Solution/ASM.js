import { ThemeProvider } from "@emotion/react";
import theme from "../../../Theme/theme";
import { Box, Typography } from "@mui/material";
import ASMImage from "../../../images/ASMImage.png";
import CardMedia from "@mui/material/CardMedia";

const ASM = () => {
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
              marginRight: "6rem",
              marginLeft: "-9rem",
              marginTop: "4rem",
              [theme.breakpoints.down("xl")]: {
                padding: "4rem",
                marginRight: "0rem",
                marginLeft: "-3rem",
                marginTop: "3rem",
              },
              [theme.breakpoints.down("lg")]: {
                padding: "0rem",
                paddingLeft: "2.5rem",
                marginRight: "0rem",
                marginLeft: "2.5rem",
                marginTop: "8rem",
              },
              [theme.breakpoints.down("md")]: {
                padding: "0rem",
                paddingLeft: "1rem",
                marginRight: "0rem",
                marginLeft: "2rem",
                marginTop: "6rem",
              },
              [theme.breakpoints.down("sm")]: {
                padding: "0rem",
                paddingLeft: "2rem",
                marginRight: "0rem",
                marginLeft: "0rem",
                marginTop: "4rem",
              },
              [theme.breakpoints.down("xs")]: {
                padding: "0rem",
                paddingLeft: "2rem",
                marginRight: "0rem",
                marginLeft: "0rem",
                marginTop: "2rem",
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
                  marginBottom: "1rem",
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: "35px",
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
              Attack Surface Management
            </Typography>
            <Typography
              sx={{
                maxWidth: "450px",
                width: "350px",
                marginLeft: "1rem",
                height: "3px",
                backgroundColor: "#000",
                [theme.breakpoints.down("lg")]: {
                  width: "200px",
                  marginLeft: "0.5rem",
                  height: "3px",
                },
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
                  width: "100px",
                  marginLeft: "0.5rem",
                  height: "1.5px",
                },
              }}
            />
            <Typography
              sx={{
                maxWidth: "420px",
                fontFamily: "Arial",
                fontSize: "36px",
                lineHeight: "41px",
                color: "#000",
                fontWeight: 400,
                marginTop: "1rem",
                padding: "1rem",
                height: "123px",
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
              Lookout for any mention or leak of your asset on Darkweb.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "435px",
              height: "450px",
              objectFit: "cover",
              marginTop: "60px",
              [theme.breakpoints.down("xl")]: {
                width: "650px",
                height: "650px",
                marginTop: "80px",
              },
              [theme.breakpoints.down("lg")]: {
                width: "550px",
                height: "550px",
                marginTop: "130px",
              },
              [theme.breakpoints.down("md")]: {
                width: "300px",
                height: "300px",
                marginTop: "100px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "300px",
                height: "300px",
                marginTop: "70px",
              },
              [theme.breakpoints.down("xs")]: {
                width: 200,
                height: 190,
                marginTop: "60px",
              },
            }}
          >
            <CardMedia
              sx={{
                height: "456px",
                width: "372px",
                [theme.breakpoints.down("xl")]: {
                  width: "600px",
                  height: "450px",
                },
                [theme.breakpoints.down("lg")]: {
                  width: "460px",
                  height: "360px",
                },
                [theme.breakpoints.down("md")]: {
                  width: "300px",
                  height: "230px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "180px",
                  height: "140px",
                },
                [theme.breakpoints.down("xs")]: {
                  width: "160px",
                  height: "130px",
                },
              }}
              image={ASMImage}
              title="ASMImage"
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default ASM;
