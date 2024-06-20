import { Box, InputBase, Typography, Button } from "@mui/material";
import { useState } from "react";
import { baseUrl } from "../../helpers/config";
import axios from "axios";
import theme from "../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import CImage from "../../images/CImage.jpg";
import { useNavigate } from "react-router-dom";

function Subscribe() {
  const navigate = useNavigate();

  const handleDemo = () => {
    navigate("/request-a-demo");
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
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#ffe249",
          minHeight: "40vh",
          [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${CImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "55%",
            height: "622px",
            margin: "20px 10px",
            padding: "2rem",
            [theme.breakpoints.down("sm")]: {
              height: "400px",
              width: "96%",
            },
            [theme.breakpoints.down("xs")]: {
              height: "400px",
              width: "94%",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Times New Roman",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "110px",
              color: "000",
              padding: "1rem",
              fontSize: "96px",
              marginLeft: "8rem",
              [theme.breakpoints.down("xl")]: {
                marginTop: "2.5rem",
                maxWidth: "500px",
              },
              [theme.breakpoints.down("lg")]: {
                marginTop: "3rem",
                marginLeft: "0rem",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "80px",
                marginTop: "0rem",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "50px",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "30px",
                maxWidth: "250px",
              },
            }}
          >
            Get in Touch with us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "8rem",
              padding: "1rem",
              [theme.breakpoints.down("lg")]: {
                marginLeft: "0rem",
              },
              [theme.breakpoints.down("md")]: {
                marginLeft: "0rem",
                marginTop: "0rem",
              },
              [theme.breakpoints.down("sm")]: {
                marginLeft: "0rem",
                marginTop: "0rem",
              },
              [theme.breakpoints.down("xs")]: {
                marginLeft: "0rem",
                marginTop: "0rem",
              },
            }}
          >
            <Button
              sx={{
                boxSizing: "border-box",
                width: "257px",
                height: "69px",
                border: "2px solid #000",
                filter: "drop-shadow(3px 3px 3px rgba(238, 238, 238, 0.25))",
                color: "#000",
                textTransform: "capitalize",
                [theme.breakpoints.down("md")]: {
                  width: "230px",
                  height: "65px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "200px",
                  height: "63px",
                },
                [theme.breakpoints.down("xs")]: {
                  width: "180px",
                  height: "60px",
                },
              }}
            >
              Contact Us
            </Button>
            <Button
              onClick={handleDemo}
              sx={{
                boxSizing: "border-box",
                width: "257px",
                height: "69px",
                marginLeft: "1rem",
                background:
                  "linear-gradient(103.37deg, #000000 -4.26%, rgba(40, 40, 40, 0.79) 112.08%)",
                color: "#fff",
                textTransform: "capitalize",
                [theme.breakpoints.down("md")]: {
                  width: "230px",
                  height: "65px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "200px",
                  height: "63px",
                },
                [theme.breakpoints.down("xs")]: {
                  width: "180px",
                  height: "60px",
                },
              }}
            >
              Free Demo
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "45%",
            margin: "20px 10px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#000",
            height: "622px",
            padding: "1rem",
            [theme.breakpoints.down("lg")]: {
              width: "96%",
            },
            [theme.breakpoints.down("md")]: {
              width: "96%",
            },
            [theme.breakpoints.down("sm")]: {
              height: "400px",
              width: "96%",
            },
            [theme.breakpoints.down("xs")]: {
              height: "400px",
              width: "94%",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Times New Roman",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "64px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              width: "519px",
              lineHeight: "74px",
              [theme.breakpoints.down("lg")]: {
                width: "300px",
              },
              [theme.breakpoints.down("md")]: {
                width: "220px",
                fontSize: "55px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "350px",
              },
              [theme.breakpoints.down("xs")]: {
                width: "100%",
              },
            }}
          >
            Subscribe to our Newsletter
          </Typography>
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
              <Box
                sx={{
                  width: "519px",
                  height: "55px",
                  background: "#fff",
                  marginTop: "2rem",
                  [theme.breakpoints.down("lg")]: {
                    width: "300px",
                  },
                  [theme.breakpoints.down("md")]: {
                    width: "220px",
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: "350px",
                  },
                  [theme.breakpoints.down("xs")]: {
                    width: "100%",
                  },
                }}
              >
                <InputBase
                  onChange={(e) => handle(e)}
                  id="email"
                  value={data.email}
                  placeholder="Email"
                  type="email"
                  pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"
                  sx={{ marginTop: "0.7rem", marginLeft: "1rem" }}
                  required
                />
              </Box>
              <Button
                sx={{
                  width: "174px",
                  height: "50px",
                  cursor: "pointer",
                  marginTop: "2rem",
                  textAlign: "left",
                  color: "#000",
                  background:
                    "linear-gradient(198.21deg, #FFE249 5.8%, rgba(240, 205, 19, 0.61) 173.06%)",
                  boxShadow: "3px 3px 3px rgba(238, 238, 238, 0.25)",
                }}
                type="submit"
                disabled={!data.email}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Subscribe
                </Typography>
              </Button>
            </form>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Subscribe;
