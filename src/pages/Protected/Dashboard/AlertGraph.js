import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Paper, Typography } from "@mui/material";

const AlertGraph = () => {
  // Define the alertData within the component
  const alertData = [
    { wallet: "0x83a5D1A8D5Bb7B12eFa24fe55c7764e6A20d4c99", alerts: 5 },
    { wallet: "0xC9a2D5b8e5D382fC5D0B9BCF8A099e751368Ca2F", alerts: 10 },
    { wallet: "0x47Bd5fCfA7fCF93769eF86C13BDC64e2b74E0148", alerts: 2 },
    { wallet: "0x5f3D23A17c7B21e53E6BbFfC3a9C4b18d041F72E", alerts: 8 },
    { wallet: "0xEc2f65D1Ab52EAD68e176c98b352D61e99C7a4F3", alerts: 3 },
    { wallet: "0xaB23fC59c5c02F87408c1920E8C52Ea0d8C913eD", alerts: 6 },
    { wallet: "0xD73aBF2D21818D890AaCEc4bF8CcA2A35B842849", alerts: 4 },
    { wallet: "0x1F3e5b7F79cBdca4586A84a37F7A1D02c531f24b", alerts: 9 },
    { wallet: "0x9F35c70E5C62dBd56f1638f9cC2edfF56a4E7341", alerts: 7 },
    { wallet: "0x6c4a68294D9c4F06f55fC20F7d05e588f5eA52D9", alerts: 12 },
    { wallet: "0xBa492dE4Dc6d72EbD3AA22865Edd643bD4F5209f", alerts: 2 },
    { wallet: "0x0E34B1e6fC5F6ef59403Af1d14870A69049c3d3D", alerts: 5 },
    { wallet: "0xFa84711f9EDa577442d2a2bE0Cf38CEe3F5f9721", alerts: 10 },
  ];

  const customStyles = {
    paper: {
      padding: "1rem",
      marginBottom: "1rem",
      textAlign: "center",
      display: "flex", // Add this line
      flexDirection: "column", // This is optional, it ensures content is stacked vertically
      justifyContent: "center", // Center horizontally
      alignItems: "center",
      borderRadius:"20px",
      boxShadow:"0px 0px 8px 0px #000"
    },
  };

  return (
    <Paper elevation={3} style={customStyles.paper}>
      <Typography variant="h5"sx={{marginBottom:"15px",fontFamily: "Times New Roman",fontStyle: "normal",fontWeight: 400,fontSize: "32px",lineHeight: "37px"}}>Alerts by Wallet</Typography>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={alertData}>
          <XAxis dataKey="wallet"/>
          <YAxis/>
          <Tooltip />
          <Bar dataKey="alerts" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default AlertGraph;

