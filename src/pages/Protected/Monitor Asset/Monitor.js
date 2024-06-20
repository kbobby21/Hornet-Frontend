import React, { useState } from "react";
import { Box, Button, Select, MenuItem, TextField } from "@mui/material";
import theme from "../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "../../../components/Layout/Layout";
import Image from "../../../images/Background5.jpg";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { usePostAssetMutation } from "../../../Service/api";

const Monitor = () => {
  const [assetValue, setAssetValue] = useState("");
  const [assetType, setAssetType] = useState("wallet_address");
  const navigate = useNavigate();
  const [postAsset] = usePostAssetMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if both assetType and assetValue are not empty
    if (!assetType || !assetValue) {
      alert("Please fill in both asset type and asset value.");
      return;
    }

    const assetData = {
      monitor: [
        {
          asset_type: assetType.toLowerCase().replace(" ", "_"),
          asset_value: assetValue,
        },
      ],
    };

    postAsset(assetData)
      .unwrap()
      .then((data) => {
        if (data.message !== "success") {
          console.error("Server Message:", data.message); // Log the server message if not 'success'
          alert(data.message);
        }

        setAssetValue("");
        setAssetType("wallet_address");
        navigate("/addAsset");
      })
      .catch((error) => {
        console.error("Actual Error:", error);
        console.error("Error Message:", error.message);
      });
  };

  const showSubmit = () => {
    navigate("/assetDetails");
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Layout>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              minHeight: "100vh",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                width: "50%",
                maxWidth: "700px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "700px",
                  height: "60px",
                  background: "#FFFFFF",
                  borderRadius: "104px",
                  //boxShadow:"0px 0px 15px #71797E"
                }}
              >
                <Select
                  value={assetType}
                  onChange={(e) => setAssetType(e.target.value)}
                  sx={{
                    border: "none",
                    backgroundColor: "rgba(119, 119, 119, 0.07)",
                    color: "#000",
                    borderRadius: "104px",
                    borderColor: "#ffffff", // Change the border color here
                    outline: "none", // Remove focus outline
                    boxShadow: "none", // Remove focus box shadow
                    width: "300px", // Set the desired width
                  }}
                  MenuProps={{
                    style: {
                      borderRadius: "104px",
                    },
                    PopperProps: {
                      style: {
                        borderRadius: "104px",
                      },
                    },
                  }}
                >
                  <MenuItem value="wallet_address" sx={{ width: "150px" }}>
                    Wallet Address
                  </MenuItem>
                  <MenuItem value="email" sx={{ width: "150px" }}>
                    Email
                  </MenuItem>
                </Select>
                <TextField
                  variant="standard"
                  placeholder="Search Asset Value"
                  value={assetValue}
                  onChange={(e) => setAssetValue(e.target.value)}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    width: "100%",
                    color: "white",
                    borderRadius: "104px",
                    outlineColor: "#fff",
                    marginTop: "1rem",
                    marginLeft: "0.5rem",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    marginRight: "1rem",
                  }}
                >
                  <SearchIcon />
                </Box>
              </div>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Button
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "50px",
                  marginRight: "13rem",
                  background:
                    "linear-gradient(270deg, #FFE249 6.69%, #B49701 74.02%)",
                  boxShadow: "0px 8px 6px rgba(255, 226, 73, 0.15)",
                  borderRadius: "104px",
                  color: "#000",
                  textTransform: "capitalize", // Capitalize the first letter, make the rest lowercase
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontFamily: "poppins",
                }}
                onClick={handleSubmit}
              >
                Monitor This Asset
              </Button>

              <Button
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "50px",
                  marginLeft: "14rem",
                  background: "#000",
                  borderRadius: "104px",
                  color: "#FFE249",
                  textTransform: "capitalize", // Capitalize the first letter, make the rest lowercase
                  fontWeight: "bold",
                  fontSize: "16px",
                  border: "1px solid #FFE249",
                }}
                onClick={showSubmit}
              >
                Show All Assets
              </Button>
            </Box>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default Monitor;
