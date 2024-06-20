import React, { useState } from "react";
import { Drawer, IconButton, Box, Link } from "@mui/material";
import theme from "../../Theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import H1Logo from "../../images/hornet-h1.png";

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
    fontSize: "40px",
    cursor: "pointer",
    marginRight: "10px",
  },
  box: {
    backgroundColor: "#000",
    borderRadius: "4px",
    marginBottom: "15px",
    paddingTop: "14px",
    paddingLeft: "10px",
  },
};

const generateLinkStyle = (hoveredLink, theme) => {
  return {
    color: hoveredLink
      ? theme.palette.special.main
      : theme.palette.special.main,
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

const DrawerH = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <>
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
            <img src={H1Logo} alt="hornet" height={"60"} width="170" />
          </Box>

          <Link
            to="/requestDemo"
            style={generateLinkStyle(hoveredLink === "/requestDemo", theme)}
            onMouseEnter={() => setHoveredLink("/requestDemo")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Demo
          </Link>

          <Link
            to="/product"
            style={generateLinkStyle(hoveredLink === "/product", theme)}
            onMouseEnter={() => setHoveredLink("/product")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Product
          </Link>

          <Link
            to="/insights"
            style={generateLinkStyle(hoveredLink === "/insights", theme)}
            onMouseEnter={() => setHoveredLink("/insights")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Insights
          </Link>

          <Link
            to="/company"
            style={generateLinkStyle(hoveredLink === "/company", theme)}
            onMouseEnter={() => setHoveredLink("/company")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Company
          </Link>

          <Link
            to="/dashboard"
            style={generateLinkStyle(hoveredLink === "/dashboard", theme)}
            onMouseEnter={() => setHoveredLink("/dashboard")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            style={generateLinkStyle(hoveredLink === "/login", theme)}
            onMouseEnter={() => setHoveredLink("/login")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Login
          </Link>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: "#ffe249", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="#000" sx={customStyles.menu} />
      </IconButton>
    </>
  );
};

export default DrawerH;
