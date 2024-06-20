import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LinkedIn } from "@mui/icons-material";
import theme from "../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Logo from "../../images/hornet-h1.png";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../helpers/config";
import axios from "axios";

const Footer = () => {
  const navigate = useNavigate();

  const handleTeam = () => {
    navigate("/team");
  };

  const handlePolicy = () => {
    navigate("/privacyPolicy");
  };

  const handleDemo = () => {
    navigate("/requestDemo");
  };

  const handleProduct = () => {
    navigate("/product");
  };
  const handleAbout = () => {
    navigate("/aboutUs");
  };
  const handleHome = () => {
    navigate("/");
  };

  const [data, setData] = useState({
    email: "",
    subscribed: false,
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(`${baseUrl}/customer`, { email: data.email })
      .then((res) => {
        const message = res.data.message;
        if (message !== "success") {
          console.error("Server Message:", message);
        } else if (res.status === 200) {
          setData({ email: "", subscribed: true });
        }
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "30vh",
          backgroundColor: theme.palette.special.main,
          color: theme.palette.primary.main,
          p: 0.01,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            minHeight: "30vh",
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
            [theme.breakpoints.up("lg")]: {
              padding: "0.5rem 10rem",
            },
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              onClick={handleHome}
              style={{
                width: "150px",
                height: "40px",
                display: "flex",
                textAlign: "left",
                cursor: "pointer",
              }}
            />
            <Typography sx={{}}>
              Hornet is India's First DarkWeb and Blockchain Investigation and
              Intelligence Platform.
            </Typography>
            <Box>
              <LinkedIn
                sx={{
                  fontSize: "30px",
                  cursor: "pointer",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    transform: "scale(1.2)",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/hornet.technology/"
                  )
                }
              />
              <TwitterIcon
                sx={{
                  marginLeft: "0.5rem",
                  fontSize: "30px",
                  cursor: "pointer",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    transform: "scale(1.2)",
                  },
                }}
                onClick={() => window.open("https://twitter.com/hornetdefiant")}
              />
              <InstagramIcon
                sx={{
                  marginLeft: "0.5rem",
                  fontSize: "30px",
                  cursor: "pointer",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    transform: "scale(1.2)",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://instagram.com/hornet.technology?igshid=YmMyMTA2M2Y="
                  )
                }
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>Company</Typography>
            <Typography
              onClick={handleProduct}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Our Product
            </Typography>
            <Typography
              onClick={handleAbout}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              About Us
            </Typography>
            <Typography
              onClick={handleTeam}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Our Team
            </Typography>
            <Typography
              onClick={handleDemo}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Free Demo
            </Typography>
          </Box>
          {/* <Box
            sx={{
              width: "120px",
              border: "2px solid #fff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Product</Typography>
            <Typography>About Us</Typography>
            <Typography>Out Team</Typography>
            <Typography>Free Demo</Typography>
          </Box> */}
          <Box
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1rem",
              gap: "0.5rem",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>NewsLetter</Typography>
            <Typography>Subscribe us to weekly newsletter</Typography>
            {data.subscribed ? (
              <Button
                sx={{
                  bgcolor: "green",
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.special.main,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Subscribed
                </Typography>
              </Button>
            ) : (
              <form onSubmit={(e) => submit(e)}>
                <TextField
                  onChange={(e) => handle(e)}
                  id="email"
                  value={data.email}
                  placeholder="Email"
                  type="email"
                  pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"
                  required
                  sx={{ backgroundColor: "#fff" }}
                />

                <Button
                  sx={{
                    border: "1px solid #daa520",
                    borderRadius: "104px",
                    width: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    marginTop: "0.7rem",
                    "&:hover": {
                      color: "#fff",
                      border: "1px solid #fff",
                    },
                  }}
                  type="submit"
                >
                  Send
                </Button>
              </form>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #daa520",
            margin: "0px 35px",
            [theme.breakpoints.up("lg")]: {
              margin: "0rem 11rem",
            },
          }}
        ></Box>
        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 35px",
              [theme.breakpoints.up("lg")]: {
                padding: "1rem 11rem",
              },
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            }}
          >
            <Typography> 2024 &copy; Hornet Decentratech Pvt Ltd.</Typography>

            <Typography
              onClick={handlePolicy}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
