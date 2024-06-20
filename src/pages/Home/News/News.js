import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "../../../images/News/Highnews.jpeg";
import image2 from "../../../images/News/IMCC.jpeg";
import image3 from "../../../images/News/Ignou.jpeg";
import image4 from "../../../images/News/ABP.jpeg";
import image5 from "../../../images/News/IgnouD.jpeg";
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

export default class News extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
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
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const data = [
      {
        img: image1,
        detail: `Delighted to share our CEO entrepreneurial journey  childhood significance of vision and risk-taking ability with the CEO of Techno India Group Dr. Sujoy Biswas.`,
      },
      {
        img: image2,
        detail: `A heartfelt thank you to the Dept of IT & Electronics, Govt of West Bengal, for choosing Hornet to represent the technological excellence of Bengal at the IMC in New Delhi on 27th OCT 2023.`,
      },
      {
        img: image3,
        detail: `Honored and thrilled to announce that Hornet has been awarded the Best Innovation Award🥉 by IGNOU from the Hon Lt. Governor Delhi Shri Vinai Saxena!`,
      },
      {
        img: image4,
        detail: `Hornet, a groundbreaking startup, has achieved significant recognition by winning the prestigious Best Startup Award at ABP INFOCOM 2023, showcasing its exceptional achievements and innovation in the industry.`,
      },
      {
        img: image5,
        detail: `Felicitation at the Indira Gandhi National Open University’s Kolkata Regional Centre by the Director Dr Shiv Kumar for winning Best Innovation Award 🥉 at the National Level earlier in the month of November.
        `,
      },
    ];
    return (
      <ThemeProvider theme={theme}>
        <style>{slickStyles}</style>
        <Box
          sx={{
            padding: "2rem 5rem",
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "85vh",
            [theme.breakpoints.down("md")]: {
              padding: "2rem 2rem",
            },
            [theme.breakpoints.down("sm")]: {
              padding: "0rem 2rem",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              [theme.breakpoints.down("md")]: {
                padding: "2rem",
              },
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
              Recent News
            </Typography>
          </Box>
          <Box>
            <Box>
              <Slider {...settings}>
                {data.map((d) => (
                  <Card
                    sx={{
                      width: "800px",
                      maxWidth: "600px",
                      height: "530px",
                      // objectFit: "cover",
                      position: "relative",
                      background: "#f2f2f2",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      padding: "10px",
                      [theme.breakpoints.down("sm")]: {
                        height: "550px",
                      },
                      [theme.breakpoints.down("xs")]: {
                        height: "490px",
                      },
                    }}
                  >
                    {/* <Box
                      sx={{
                        position: "relative",
                        width: "800px",
                        maxWidth: "600px",
                        height: "430px",
                        objectFit: "cover",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        [theme.breakpoints.down("xs")]: {
                          width: "100%",
                          height: "350px",
                        },
                      }}
                    > */}
                    <CardMedia
                      component="img"
                      image={d.img}
                      height="380"
                      sx={{
                        [theme.breakpoints.down("xs")]: {
                          height: "300px",
                          aspectRatio: "1:1",
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
                    {/* </Box> */}

                    <CardInfo sx={{ maxWidth: 800, position: "relative" }}>
                      <Typography
                        sx={{
                          fontSize: "19px",
                          fontFamily: "Times New Roman",
                          cursor: "pointer",
                          [theme.breakpoints.down("xs")]: {
                            fontSize: "15px",
                          },
                        }}
                      >
                        {d.detail}
                      </Typography>
                    </CardInfo>
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
