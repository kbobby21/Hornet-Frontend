import React, { useState } from "react";
import { Button, TextField, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import Image from "../../../images/Background5.jpg";
import theme from "../../../Theme/theme";
import { motion } from "framer-motion";
import { useAddBitcoinTransactionMutation } from "../../../Service/api";

const AddBitcoin = () => {
  const [blockNum, setBlockNum] = useState("");
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const [addBitcoinTransaction] = useAddBitcoinTransactionMutation();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const transactionData = [
        {
          block_num: parseInt(blockNum),
          sender,
          receiver,
          amount: parseFloat(amount),
          timestamp: new Date().toISOString(),
        },
      ];

      const { data } = await addBitcoinTransaction(transactionData);

      if (data.message !== "success") {
        console.error("Server Message:", data.message);
        alert(data.message);
      } else {
        alert("Transaction added successfully:", data);
        navigate("/cryptoTransactions");
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("An unexpected error occurred. Please try again later.");
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
            }}
          >
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
              }}
            >
              <h1 style={{ color: "white" }}>Add Bitcoin Transaction</h1>
              <form
                onSubmit={handleFormSubmit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "1rem",
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: "0.5rem",
                  width: "100%",
                  maxWidth: "400px",
                  [theme.breakpoints.down("sm")]: {
                    maxWidth: "300px",
                  },
                }}
              >
                <div style={{ margin: "1rem 0", width: "100%" }}>
                  <TextField
                    required
                    fullWidth
                    label="Block Number"
                    value={blockNum}
                    onChange={(e) => setBlockNum(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div style={{ margin: "1rem 0", width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Sender"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    required
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div style={{ margin: "1rem 0", width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Receiver"
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                    required
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div style={{ margin: "1rem 0", width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    variant="outlined"
                    size="small"
                  />
                </div>

                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem",
                    border: "none",
                    borderRadius: "0.25rem",
                    color: theme.palette.special.main,
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "backgroundColor 0.2s",
                    "&:hover": {
                      backgroundColor: "#0069d9",
                    },
                  }}
                >
                  Add Bitcoin Transaction
                </Button>
              </form>
            </div>
          </div>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default AddBitcoin;
