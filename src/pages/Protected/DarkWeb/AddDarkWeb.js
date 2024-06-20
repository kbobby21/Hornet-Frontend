import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import theme from "../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Image from "../../../images/Background5.jpg";
import { motion } from "framer-motion";
import { usePostDarkWebsiteMutation } from "../../../Service/api";

const AddDarkWeb = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [onionUrl, setOnionUrl] = useState("");
  const [cryptoType, setCryptoType] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();
  const [postDarkWebsite] = usePostDarkWebsiteMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Dark = {
      website_name: websiteName,
      onion_url: onionUrl,
      wallets: [
        {
          address: walletAddress,
          crypto_type: cryptoType,
        },
      ],
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    postDarkWebsite(Dark)
      .unwrap()
      .then((data) => {
        if (data.message !== "success") {
          console.error("Server Message:", data.message); // Log the server message if not 'success'
          alert(data.message);
        }

        setWebsiteName("");
        setOnionUrl("");
        setCryptoType("");
        setWalletAddress("");
        setTags("");
        alert("The data is successfully submitted");
        navigate("/darkWeb");
      })
      .catch((error) => {
        console.error("Actual Error:", error);
        console.error("Error Message:", error.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Layout>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              [theme.breakpoints.down("sm")]: {
                maxWidth: "350px",
              },
            }}
          >
            <h1
              style={{
                color: theme.palette.secondary.main,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Add Dark Web Data
            </h1>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "0.5rem",
                width: "100%",
                maxWidth: "400px",
                [theme.breakpoints.down("sm")]: {
                  maxWidth: "350px",
                },
              }}
              onSubmit={handleSubmit}
            >
              <div style={{ margin: "1rem 0", width: "100%" }}>
                <TextField
                  label="Website Name"
                  variant="outlined"
                  size="small"
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                  required
                  fullWidth
                  InputLabelProps={{
                    style: {
                      marginBottom: "0.5rem",
                    },
                  }}
                />
              </div>
              <div style={{ margin: "1rem 0", width: "100%" }}>
                <TextField
                  label="Onion URL"
                  variant="outlined"
                  size="small"
                  value={onionUrl}
                  onChange={(e) => setOnionUrl(e.target.value)}
                  required
                  fullWidth
                  InputLabelProps={{
                    style: {
                      marginBottom: "0.5rem",
                    },
                  }}
                />
              </div>
              <div style={{ margin: "1rem 0", width: "100%" }}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <InputLabel id="crypto-type-label">Crypto Type</InputLabel>
                  <Select
                    labelId="crypto-type-label"
                    id="crypto-type"
                    value={cryptoType}
                    onChange={(e) => setCryptoType(e.target.value)}
                    label="Crypto Type"
                    required
                    inputProps={{
                      style: {
                        width: "100%",
                        padding: "0.5rem",
                        border: "none",
                        borderRadius: "0.25rem",
                        backgroundColor: "#f0f0f0",
                        fontSize: "1rem",
                        fontFamily: "inherit",
                      },
                      focus: {
                        outline: "none",
                        boxShadow: "0 0 0 2px rgba(0, 0, 255, 0.5)",
                      },
                    }}
                  >
                    <MenuItem value="bitcoin">Bitcoin</MenuItem>
                    <MenuItem value="ethereum">Ethereum</MenuItem>
                    <MenuItem value="polygon">Polygon</MenuItem>
                    <MenuItem value="solana">Solana</MenuItem>
                    <MenuItem value="monero">Monero</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ margin: "1rem 0", width: "100%" }}>
                <TextField
                  label="Wallet Address"
                  variant="outlined"
                  size="small"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  required
                  fullWidth
                  InputLabelProps={{
                    style: {
                      marginBottom: "0.5rem",
                    },
                  }}
                />
              </div>
              <div style={{ margin: "1rem 0", width: "100%" }}>
                <TextField
                  label="Tags"
                  variant="outlined"
                  size="small"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      marginBottom: "0.5rem",
                    },
                  }}
                />
              </div>
              <Button
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem",
                  border: "none",
                  borderRadius: "0.25rem",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.special.main,
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  "&:hover": {
                    backgroundColor: "#0069d9",
                  },
                }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default AddDarkWeb;
