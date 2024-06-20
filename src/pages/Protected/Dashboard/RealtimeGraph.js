import React, { useEffect, useState } from "react";
import {  LineChart, Line,  XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Paper, Typography } from "@mui/material";
import { baseUrl } from '../../../helpers/config';




const RealtimeGraph = () => {
  const [liveTransactionData, setLiveTransactionData] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/transactions?page_no=1&sender=all&receiver=all`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch data from the server. Status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data.message === "success" && data.data) {
          const transactionData = data.data;
          setLiveTransactionData(transactionData);
        } else {
          console.error("Error Message:", data.message); // Log the error message
        }
      })
      .catch((error) => {
        console.error("Actual Error:", error); // Log the actual error
      });
  }, []);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const customStyles={
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
      <Typography variant="h5" sx={{marginBottom:"15px",fontFamily: "Times New Roman",fontStyle: "normal",fontWeight: 400,fontSize: "32px",lineHeight: "37px"}}>Real-Time Transactions</Typography>
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={liveTransactionData}>
          <XAxis dataKey="timestamp" tickFormatter={formatTime} />
          <YAxis dataKey="amount" />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default RealtimeGraph;
