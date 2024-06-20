import React from "react";
import { Box, Alert, Stack, Button } from "@mui/material";
import theme from "../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "../../../components/Layout/Layout";
import Image from "../../../images/Background5.jpg";
import { motion } from "framer-motion";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useNavigate } from "react-router-dom";

const AddAsset = () => {
  const navigate = useNavigate();

  const addSubmit = () => {
    navigate("/monitor");
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
            <Box>
              <Stack>
                <Alert
                  severity="success"
                  sx={{
                    borderRadius: "2rem",
                    marginTop: "2rem",
                    display: "flex",
                    width: "600px",
                    height: "60px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  iconMapping={{ success: <TaskAltIcon fontSize="large" /> }}
                >
                  <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Your Asset is added successfully
                  </div>
                </Alert>
              </Stack>
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
                  width: "220px",
                  height: "50px",
                  marginRight: "15rem",
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
                onClick={addSubmit}
              >
                Add More Assets
              </Button>

              <Button
                style={{
                  position: "absolute",
                  width: "220px",
                  height: "50px",
                  marginLeft: "15rem",
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
export default AddAsset;
