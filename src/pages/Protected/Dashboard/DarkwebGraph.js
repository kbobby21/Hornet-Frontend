import React from "react";
import { BarChart, Bar,  XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Paper, Typography} from "@mui/material";


const DarkwebGraph = () => {
  const darkWebData = [
    { category: "Drug Trafficking", value: 50 },
    { category: "Hitman Services", value: 20 },
    { category: "Arms Dealing", value: 30 },
    { category: "Hacking Tools", value: 15 },
    { category: "Stolen Data", value: 40 },
    { category: "Counterfeit Documents", value: 25 },
    { category: "Human Trafficking", value: 35 },
    { category: "Credit Card Fraud", value: 18 },
    { category: "Weapon Trade", value: 28 },
    { category: "Fake IDs", value: 12 },
    { category: "Illegal Substances", value: 32 },
    { category: "Cybersecurity Services", value: 22 },
  ];
  
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
      <Typography variant="h5" sx={{marginBottom:"15px",fontFamily: "Times New Roman",fontStyle: "normal",fontWeight: 400,fontSize: "32px",lineHeight: "37px"}}>Dark Web Categories</Typography>
      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={darkWebData}>
          <XAxis dataKey="category" tick={{ display: "none" }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default DarkwebGraph;
