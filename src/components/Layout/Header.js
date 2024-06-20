import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Button,
  IconButton,
} from "@mui/material";
import H1Logo from "../../images/hornet-h1.png";
import { ThemeProvider } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import jwt_decode from "jwt-decode";

import { useLazyGetNotificationsQuery } from "../../Service/api";

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [notificationsData, setNotificationsData] = useState(null);
  const [notifications] = useLazyGetNotificationsQuery();

  const isAuthenticated = useCallback(() => {
    const token = getCookie("token");
    return !!token;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated()) {
          const notificationResult = await notifications();
          const notificationData = notificationResult.data;
          const dataArray = notificationData.data;
          setNotificationsData(dataArray.length);
        }
      } catch (error) {
        // Handle errors, e.g., log them or show a message to the user
        console.error("Error fetching notifications:", error);
      }
    };

    try {
      if (isAuthenticated()) {
        fetchData();
        const intervalId = setInterval(fetchData, 2 * 60 * 1000);
        return () => clearInterval(intervalId);
      }
    } catch {}
  }, [isAuthenticated, notifications]);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
    return undefined;
  };

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      const email = decodedToken.email;
      const isAdmin = email.includes("@hornet.technology");
      setIsAdmin(isAdmin);
    }
  }, []);

  const customStyles = {
    auth: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "20px",
    },
    notification: {
      textAlign: "center",
      justifyContent: "center",
      color: "#FFFFFF",
      fontSize: "25px",
      marginLeft: "10px",
      borderRadius: "50%",
    },
    appBar: {
      backgroundColor: "transparent",
      position: "absolute",
      top: 0,
      boxShadow: "none",
      left: 0,
      right: 0,
    },
    menu: {
      color: "#fff",
      fontSize: "40px",
      cursor: "pointer",
      marginRight: "30px",
    },
    box: {
      backgroundColor: "#000",
      padding: "10px",
      borderRadius: "4px",
      marginBottom: "15px",
    },
  };

  const generateLinkStyle = (hoveredLink, theme) => {
    return {
      color: hoveredLink ? "#FFFFFF" : "#DAA520",
      textDecoration: "none",
      fontWeight: "bold",
      display: "block",
      padding: "20px 0",
      borderTop: "1px solid #FFFFFF",
      marginLeft: "5px",
      borderBottom: "1px solid #DAA520",
      fontSize: "18px", // Increase the font size
    };
  };

  const LinkStyle = (hoveredLink, theme) => {
    return {
      color: hoveredLink ? "#000" : "#000",
      textDecoration: "none",
      fontWeight: "bold",
      display: "block",
      padding: "20px 0",
      borderTop: "1px solid #000",
      marginLeft: "5px",
      borderBottom: "1px solid #000",
      fontSize: "18px", // Increase the font size
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar component={"nav"} sx={customStyles.appBar}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {isAuthenticated() && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MenuIcon
                    sx={customStyles.menu}
                    onClick={() => setIsDrawerOpen(true)}
                  />
                </Box>
              )}
              {isAuthenticated() && (
                <Drawer
                  anchor="left"
                  open={isDrawerOpen}
                  onClose={() => setIsDrawerOpen(false)}
                  sx={{
                    "& .MuiDrawer-paper": {
                      backgroundColor: "#000",
                      width: "250px",
                    },
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    {/* Drawer contents */}
                    <Box sx={customStyles.box}>
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <img
                          src={H1Logo}
                          alt="hornet"
                          height={"60"}
                          width="180"
                          onClick={() => (window.location.href = "/")}
                        />
                      </Link>
                    </Box>

                    <Link
                      to="/profile"
                      style={generateLinkStyle(
                        hoveredLink === "/profile",
                        theme
                      )}
                      onMouseEnter={() => setHoveredLink("/profile")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      Profile
                    </Link>

                    <Link
                      to="/darkWeb"
                      style={generateLinkStyle(
                        hoveredLink === "/darkWeb",
                        theme
                      )}
                      onMouseEnter={() => setHoveredLink("/darkWeb")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      DarkWebsites
                    </Link>

                    {isAdmin && (
                      <Link
                        to="/cryptoTransactions"
                        style={generateLinkStyle(
                          hoveredLink === "/cryptoTransactions",
                          theme
                        )}
                        onMouseEnter={() =>
                          setHoveredLink("/cryptoTransactions")
                        }
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        Real-time Transactions
                      </Link>
                    )}

                    <Link
                      to="/Exchange"
                      style={generateLinkStyle(
                        hoveredLink === "/Exchange",
                        theme
                      )}
                      onMouseEnter={() => setHoveredLink("/Exchange")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      Exchange
                    </Link>

                    <Link
                      to="/monitor"
                      style={generateLinkStyle(
                        hoveredLink === "/monitor",
                        theme
                      )}
                      onMouseEnter={() => setHoveredLink("/monitor")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      Monitor Asset
                    </Link>

                    <Link
                      to="/searchAddress"
                      style={generateLinkStyle(
                        hoveredLink === "/searchAddress",
                        theme
                      )}
                      onMouseEnter={() => setHoveredLink("/searchAddress")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      Analyze Wallet
                    </Link>
                  </Box>
                </Drawer>
              )}
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img
                    src={H1Logo}
                    alt="hornet"
                    height={"60"}
                    width="180"
                    onClick={() => (window.location.href = "/")}
                  />
                </Link>
              </Typography>
            </Box>
            {/* Hero section Drawer */}
            {!isAuthenticated() && isMatch ? (
              <Box>
                <Drawer
                  anchor="right"
                  open={openDrawer}
                  onClose={() => setOpenDrawer(false)}
                  sx={{
                    "& .MuiDrawer-paper": {
                      backgroundColor: "#ffe249",
                      width: "250px",
                    },
                  }}
                >
                  <Box sx={{ padding: "2rem" }}>
                    <Box sx={customStyles.box}>
                      <img
                        src={H1Logo}
                        alt="hornet"
                        height={"60"}
                        width="170"
                      />
                    </Box>

                    <Link
                      to="/requestDemo"
                      style={LinkStyle(hoveredLink === "/requestDemo", theme)}
                      onMouseEnter={() => setHoveredLink("/requestDemo")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      Demo
                    </Link>

                    <Link
                      to="/product"
                      style={LinkStyle(hoveredLink === "/product", theme)}
                      onMouseEnter={() => setHoveredLink("/product")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      Product
                    </Link>

                    {/* <Link
                      to="/insights"
                      style={LinkStyle(hoveredLink === "/insights", theme)}
                      onMouseEnter={() => setHoveredLink("/insights")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      Insights
                    </Link>

                    <Link
                      to="/company"
                      style={LinkStyle(hoveredLink === "/company", theme)}
                      onMouseEnter={() => setHoveredLink("/company")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      Company
                    </Link> */}

                    <Link
                      to="/login"
                      style={LinkStyle(hoveredLink === "/login", theme)}
                      onMouseEnter={() => setHoveredLink("/login")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      Login
                    </Link>

                    <Link
                      to="/aboutUs"
                      style={LinkStyle(hoveredLink === "/product", theme)}
                      onMouseEnter={() => setHoveredLink("/product")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      About Us
                    </Link>
                  </Box>
                </Drawer>
                <IconButton
                  sx={{ color: "#ffe249", marginLeft: "auto" }}
                  onClick={() => setOpenDrawer(!openDrawer)}
                >
                  <MenuIcon color="#FFE249" sx={customStyles.menu} />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {isAuthenticated() ? (
                  <>
                    <Link
                      to="/dashboard"
                      style={{ ...customStyles.auth, marginRight: "30px" }}
                    >
                      Dashboard
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/product"
                      style={{
                        ...customStyles.auth,
                        marginRight: "30px",
                        paddingLeft: "5px",
                      }}
                    >
                      Product
                    </Link>
                    {/* <Link
                      to="/insights"
                      style={{ ...customStyles.auth, marginRight: "30px" }}
                    >
                      Insights
                    </Link>
                    <Link
                      to="/company"
                      style={{ ...customStyles.auth, marginRight: "30px" }}
                    >
                      Company
                    </Link> */}
                    <Link
                      to="/aboutUs"
                      style={{ ...customStyles.auth, marginRight: "30px" }}
                    >
                      About Us
                    </Link>
                  </>
                )}

                {isAuthenticated() ? (
                  <Link
                    to="/logout"
                    style={{ ...customStyles.auth, marginRight: "30px" }}
                    onClick={() => {
                      document.cookie =
                        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    style={{
                      ...customStyles.auth,
                      color: "#ffe249",
                      marginRight: "30px",
                    }}
                  >
                    Login
                  </Link>
                )}
                {isAuthenticated() && (
                  <Link to="/alert" style={{ textDecoration: "none" }}>
                    <Box sx={{ marginRight: "30px" }}>
                      <Badge
                        badgeContent={notificationsData}
                        sx={{ color: "#DAA520" }}
                      >
                        <NotificationsIcon
                          sx={{ ...customStyles.notification }}
                          color="#FF0000"
                        />
                      </Badge>
                    </Box>
                  </Link>
                )}
                <Link
                  to="/requestDemo"
                  style={{
                    ...customStyles.auth,
                    marginRight: "30px",
                  }}
                >
                  <Button
                    sx={{
                      background: "rgba(217, 217, 217, 0.08)",
                      border: "1px solid #FFE249",
                      width: "125px",
                      color: "#ffe249",
                      borderRadius: "50px",
                      textTransform: "capitalize",
                    }}
                  >
                    Demo
                  </Button>
                </Link>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
