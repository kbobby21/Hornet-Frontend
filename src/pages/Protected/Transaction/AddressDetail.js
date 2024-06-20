import React, { useState, useEffect } from "react";
import { Box, Typography, TextField } from "@mui/material";
import theme from "../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "../../../components/Layout/Layout";
import Image from "../../../images/Background5.jpg";
import { motion } from "framer-motion";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BeneficiaryDetails from "./BeneficiaryDetails";
import TransactionDetails from "./TransactionDetails";
import GraphDetails from "./GraphDetails";
import { baseUrl } from "../../../helpers/config";
import Tooltip from "@mui/material/Tooltip";
import { useLocation } from "react-router-dom";

const AddressDetail = ({ transactionData, sender, setSelectedAddress }) => {
  const [tSearch, settSearch] = useState("");
  const [bSearch, setBSearch] = useState("");
  const [value, setValue] = useState("1");
  const [balance, setBalance] = useState("");
  const [address, setAddress] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const walletAddress = searchParams.get("wallet");
  const displayAddress = address || walletAddress;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (walletAddress) {
          const walletEndpoint = `${baseUrl}/wallet_balance?wallet=${walletAddress}`;

          const walletResponse = await fetch(walletEndpoint, {
            credentials: "include",
          });

          if (!walletResponse.ok) {
            console.error(
              `Failed to fetch data from the server. Status: ${walletResponse.status}`
            );
            throw new Error(
              `Failed to fetch data from the server. Status: ${walletResponse.status}`
            );
          }

          const walletData = await walletResponse.json();

          if (walletData.message === "success") {
            setBalance(walletData.data.balance);
          } else {
            console.error("Error Message:", walletData.message);
          }
        }

        if (address) {
          const senderEndpoint = `${baseUrl}/wallet_balance?wallet=${address}`;

          const senderResponse = await fetch(senderEndpoint, {
            credentials: "include",
          });

          if (!senderResponse.ok) {
            console.error(
              `Failed to fetch data from the server. Status: ${senderResponse.status}`
            );
            throw new Error(
              `Failed to fetch data from the server. Status: ${senderResponse.status}`
            );
          }

          const senderData = await senderResponse.json();

          if (senderData.message === "success") {
            // Handle the sender balance as needed
            setBalance(senderData.data.balance);
          } else {
            console.error("Error Message:", senderData.message);
          }
        }
      } catch (error) {
        console.error("Actual Error:", error);
      }
    };

    setAddress(displayAddress);
    fetchData();
  }, [walletAddress, setSelectedAddress, address, displayAddress]);

  //Transaction Search
  const transactionSearch = (event) => {
    const input = event.target.value;
    settSearch(input);
  };

  //Beneficiary Search
  const beneficiarySearch = (event) => {
    const input = event.target.value;
    setBSearch(input);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabFocus = (event) => {
    // Change the background color to yellow when the "Beneficiary" tab is active
    event.currentTarget.style.background = "#FFF";
  };

  const handleTabBlur = (event) => {
    // Change the background color to black when the "Beneficiary" tab loses focus
    event.currentTarget.style.background = "#FFE249";
  };

  const updateAddress = (newAddress) => {
    setAddress(newAddress);
  };

  const customStyles = {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      minHeight: "100vh",
      backgroundImage: `url(${Image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      maxWidth: "100%",
      height: "922px",
      left: "220px",
    },
    containerChild: {
      boxSizing: "border-box",
      position: "absolute",
      background: "rgba(217, 217, 217, 0.2)",
      border: "1px solid #EBD065",
      boxShadow: "0px 4px 6px rgba(255, 226, 73, 0.2)",
      borderRadius: "70px 20px 20px 70px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    panel: {
      position: "absolute",
      width: "72rem",
      height: "439px",
      left: "0px",
      top: "60px",
      background: "#FFFFFF",
      borderRadius: "0 20px 20px 20px", // This sets different radii for each corner.
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Layout>
          <Box style={customStyles.main}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                width: "100%",
                maxWidth: "100%",
                height: "100vh",
                overflowX: "auto",
              }}
            >
              <Box sx={{ ...customStyles.container }}>
                <Box
                  sx={{
                    ...customStyles.containerChild,
                    width: "303px",
                    height: "133px",
                    left: "234px",
                    top: "184px",
                  }}
                >
                  <Box sx={{ ...customStyles.box }}>
                    <AccountCircleIcon
                      sx={{ color: "#FFE249", marginRight: "8px" }}
                    />{" "}
                    {/* Add marginRight for spacing */}
                    <Typography sx={{ color: "#FFE249" }}>Address</Typography>
                  </Box>
                  <Tooltip title={address}>
                    <Box
                      sx={{
                        width: "200px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        height: "20px",
                        mt: "0.5rem",
                      }}
                    >
                      <Typography sx={{ color: "#FFF" }}>{address}</Typography>
                    </Box>
                  </Tooltip>
                </Box>

                <Box
                  sx={{
                    ...customStyles.containerChild,
                    width: "303px",
                    height: "133px",
                    left: "568px",
                    top: "182px",
                  }}
                >
                  <Box sx={{ ...customStyles.box }}>
                    <CurrencyBitcoinIcon
                      sx={{ color: "#FFE249", marginRight: "8px" }}
                    />{" "}
                    {/* Add marginRight for spacing */}
                    <Typography sx={{ color: "#FFE249" }}>Type</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: "0.5rem",
                    }}
                  >
                    <Typography sx={{ color: "#FFF" }}>BTC</Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    ...customStyles.containerChild,
                    width: "303px",
                    height: "133px",
                    left: "902px",
                    top: "182px",
                  }}
                >
                  <Box sx={{ ...customStyles.box }}>
                    <AccountBalanceWalletIcon
                      sx={{ color: "#FFE249", marginRight: "8px" }}
                    />{" "}
                    {/* Add marginRight for spacing */}
                    <Typography sx={{ color: "#FFE249" }}>Balance</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: "0.5rem",
                    }}
                  >
                    <Typography sx={{ color: "#FFF" }}>$ {balance}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  width: "72rem",
                  height: "499.5px",
                  left: "400px",
                  top: "370px",
                  bottom: "200px",
                  background: "rgba(217, 217, 217, 0.1)",
                  boxShadow: "0px 6px 10px rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "720px",
                    height: "73px",
                    background: "#FFE249",
                    borderRadius: "20px 20px 0 0",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <TabContext value={value}>
                    <TabList onChange={handleChange} sx={{ height: "72px" }}>
                      <Tab
                        label="Transaction"
                        value="1"
                        sx={{
                          position: "absolute",
                          width: "240px",
                          height: "68px",
                          color: "#000",
                          textTransform: "capitalize",
                          background: "#FFFFFF",
                          borderRadius: "20px 20px 0 0",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onFocus={handleTabFocus}
                        onBlur={handleTabBlur}
                      />
                      <Tab
                        label="Beneficiary"
                        value="2"
                        sx={{
                          position: "absolute",
                          width: "240px",
                          height: "68px",
                          color: "#000",
                          left: "240px",
                          textTransform: "capitalize",
                          background: "#FFE249",
                          borderRadius: "20px 20px 0 0",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onFocus={handleTabFocus}
                        onBlur={handleTabBlur}
                      />

                      <Tab
                        label="Graph"
                        value="3"
                        sx={{
                          position: "absolute",
                          width: "240px",
                          height: "68px",
                          color: "#000",
                          left: "480px",
                          textTransform: "capitalize",
                          background: "#FFE249",
                          borderRadius: "20px 20px 0 0",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onFocus={handleTabFocus}
                        onBlur={handleTabBlur}
                      ></Tab>
                    </TabList>

                    <Box
                      sx={{
                        boxSizing: "border-box",
                        position: "absolute",
                        width: "290px",
                        height: "37px",
                        left: "760px",
                        top: "10px",
                        backgroundColor: theme.palette.secondary.main,
                        border: "1px solid #3D3D3D",
                        borderRadius: "15px",
                      }}
                    >
                      {value === "1" && (
                        <TextField
                          variant="standard"
                          placeholder="Search Transaction"
                          value={tSearch}
                          onChange={transactionSearch}
                          sx={{
                            ml: "1rem",
                            backgroundColor: theme.palette.secondary.main,
                            width: "240px",
                            height: "33px",
                            color: "white",
                            borderRadius: "15px",
                            outlineColor: "#fff",
                          }}
                        />
                      )}
                      {value === "2" && (
                        <TextField
                          variant="standard"
                          placeholder="Search Beneficiary"
                          value={bSearch}
                          onChange={(event) => beneficiarySearch(event)}
                          sx={{
                            ml: "1rem",
                            backgroundColor: theme.palette.secondary.main,
                            width: "240px",
                            height: "33px",
                            color: "white",
                            borderRadius: "15px",
                            outlineColor: "#fff",
                          }}
                        />
                      )}
                    </Box>

                    <TabPanel value="1">
                      <Box style={customStyles.panel}>
                        <TransactionDetails
                          search={tSearch}
                          beneficiarySearch={transactionSearch}
                          updateAddress={updateAddress}
                          walletAddress={walletAddress}
                          setSelectedAddress={setSelectedAddress}
                        />
                      </Box>
                    </TabPanel>

                    <TabPanel value="2">
                      <Box style={customStyles.panel}>
                        <BeneficiaryDetails
                          search={bSearch}
                          beneficiarySearch={beneficiarySearch}
                        />
                      </Box>
                    </TabPanel>

                    <TabPanel value="3">
                      <Box style={customStyles.panel}>
                        <GraphDetails />
                      </Box>
                    </TabPanel>
                  </TabContext>
                </Box>
              </Box>
            </Box>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default AddressDetail;
