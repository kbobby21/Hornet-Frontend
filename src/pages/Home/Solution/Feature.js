import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import CFT from "../../../images/CFT.png";
import ASM from "../../../images/ASMImage.png";
import Darknet from "../../../images/DarknetImage.png";
import Wallet from "../../../images/WalletImage.png";
import GDPR from "../../../images/GDPRImage.png";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../Theme/theme";
import CardMedia from "@mui/material/CardMedia";
import Image from "../../../images/News/NewsBg.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: "#000", fontSize: "40px" }} />
    </div>
  );
};

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ color: "#000", fontSize: "40px" }} />
    </div>
  );
};
const slickStyles = `
  .slick-next::before, .slick-prev::before {
    content: none;
  }
`;

export default class Feature extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      centerMode: true,
      centerPadding: "100px",
      nextArrow: <NextBtn />,
      prevArrow: <PreviousBtn />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerMode: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    };

    const data = [
      {
        img: CFT,
        title: `Anti Money Laundering (AML), Counter Terrorism Financing (CFT) and
        Sanctions Compliance`,
        description: `Check if your users are complying to regulations and perform KYT
        with ease.
        `,
      },
      {
        img: ASM,
        title: `Attack Surface Management`,
        description: `Lookout for any mention or leak of your asset on DarkWeb.
        `,
      },
      {
        img: Darknet,
        title: `Darknet Threat Intelligence`,
        description: `Stay ahead of cyber threats, protect sensitive data, and mitigate
        the impact of cyberattacks.
        `,
      },
      {
        img: GDPR,
        title: `Blockchain Data Auditing`,
        description: `Audit each and every data entering your blockchain for data
        compliance like GDPR, DPDP India, etc.
        `,
      },
      {
        img: Wallet,
        title: `Analyse Wallet
        `,
        description: `Track any movement of a wallet in real-time and trace its origin.
        `,
      },
    ];
    return (
      <ThemeProvider theme={theme}>
        <style>{slickStyles}</style>
        <Box
          sx={{
            padding: "2rem 5rem",
            backgroundColor: "#EDEDED",
            minHeight: "100vh",
            [theme.breakpoints.down("md")]: {
              padding: "2rem 2rem",
              minHeight: "80vh",
            },
            [theme.breakpoints.down("sm")]: {
              padding: "0rem 2rem",
              minHeight: "63vh",
            },
            [theme.breakpoints.down("xs")]: {
              minHeight: "45vh",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <Typography
              sx={{
                maxWidth: "268px",
                height: "43px",
                fontFamily: "Arial",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "46px",
                color: "#000",
                fontSize: "40px",
                [theme.breakpoints.down("xs")]: {
                  fontSize: "33px",
                },
              }}
            >
              Our Features
            </Typography>
          </Box>
          <Box>
            <Box>
              <Slider {...settings}>
                {data.map((d) => (
                  <Card
                    sx={{
                      width: "100%",
                      maxWidth: "1500px",
                      height: "800px",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      [theme.breakpoints.down("lg")]: {
                        height: "700px",
                      },
                      [theme.breakpoints.down("md")]: {
                        height: "530px",
                      },
                      [theme.breakpoints.down("sm")]: {
                        height: "350px",
                      },
                      [theme.breakpoints.down("xs")]: {
                        height: "300px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        [theme.breakpoints.down("md")]: {
                          justifyContent: "unset",
                          alignItems: "unset",
                          paddingTop: "2rem",
                        },
                      }}
                    >
                      {/* </Box> */}

                      <CardInfo sx={{ maxWidth: 800, position: "relative" }}>
                        <Typography
                          sx={{
                            maxWidth: "400px",
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
                              paddingTop: "0rem",
                              marginBottom: "0rem",
                              lineHeight: "20px",
                            },
                          }}
                        >
                          {d.title}
                        </Typography>
                        <Typography
                          sx={{
                            maxWidth: "550px",
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
                          {d.description}
                        </Typography>
                      </CardInfo>

                      <CardMedia
                        component="img"
                        image={d.img}
                        height="600"
                        sx={{
                          display: "flex",
                          paddingTop: "5rem",
                          [theme.breakpoints.up("md")]: {
                            height: "600px",
                            width: "700px",
                            objectFit: "contain",
                            paddingTop: "2rem",
                          },
                          [theme.breakpoints.down("lg")]: {
                            height: "500px",
                            width: "400px",
                            objectFit: "contain",
                            paddingTop: "104px",
                          },
                          [theme.breakpoints.down("sm")]: {
                            height: "333px",
                            width: "250px",
                            objectFit: "contain",
                            paddingTop: "1px",
                          },
                          [theme.breakpoints.down("xs")]: {
                            height: "276px",
                            width: "120px",
                            objectFit: "contain",
                            paddingBottom: "20px",
                          },
                        }}

                        // sx={{
                        //   width: "800px",
                        //   maxWidth: "600px",
                        //   height: "430px",
                        //   borderRadius: "20px",
                        //   objectFit: "initial",
                        //   cursor: "pointer",
                        //   [theme.breakpoints.down("xs")]: {
                        //     width: "100%",
                        //     height: "350px",
                        //     // objectFit: "contain",
                        //     aspectRatio: "auto",
                        //   },
                        // }}
                      />
                    </Box>
                  </Card>
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}
