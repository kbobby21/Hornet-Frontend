import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import theme from "../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Image from "../../../images/Background5.jpg";
import { motion } from "framer-motion";
import { useAddExchangeMutation } from "../../../Service/api";

const AddExchange = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [wallet, setWallet] = useState("");

  const navigate = useNavigate();
  const [addExchange] = useAddExchangeMutation();

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const exchangeData = {
        name,
        country,
        contact_email: email,
        contact_number: number,
        wallet_address: wallet,
        required: true,
      };

      const { data } = await addExchange(exchangeData);

      if (data.message !== "success") {
        console.error("Server Message:", data.message);
        alert(data.message);
      }

      setName("");
      setEmail("");
      setCountry("");
      setNumber("");
      setWallet("");
      alert("The data is successfully submitted");
      navigate("/exchange");
    } catch (err) {
      console.error("Actual Error:", err);
      console.error("Error Message:", err.message);
    }
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
              Add Exchange Data
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
                  required
                  fullWidth
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  size="small"
                  InputLabelProps={{
                    style: {
                      marginBottom: "0.5rem",
                    },
                  }}
                />
              </div>
              <div style={{ margin: "1rem 0", width: "100%" }}>
                <FormControl required fullWidth variant="outlined" size="small">
                  <InputLabel id="country-label">Country</InputLabel>
                  <Select
                    labelId="country-label"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    label="Country"
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
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="UK">UK</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="Australia">Australia</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ margin: "1rem 0", width: "100%" }}>
                <TextField
                  fullWidth
                  label="Contact Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  size="small"
                  required
                  InputLabelProps={{
                    style: {
                      marginBottom: "0.5rem",
                    },
                  }}
                />
              </div>
              <div style={{ margin: "1rem 0", width: "100%" }}>
                <TextField
                  required
                  fullWidth
                  label="Contact Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  variant="outlined"
                  size="small"
                  InputLabelProps={{
                    style: {
                      marginBottom: "0.5rem",
                    },
                  }}
                />
              </div>
              <div style={{ margin: "1rem 0", width: "100%" }}>
                <TextField
                  required
                  fullWidth
                  label="Wallet Address"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  variant="outlined"
                  size="small"
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
                ADD DATA
              </Button>
            </form>
          </div>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default AddExchange;
