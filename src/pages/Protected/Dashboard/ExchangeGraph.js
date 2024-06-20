import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Paper, Typography } from "@mui/material";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const exchangeData = [
  { country: "USA", exchanges: 500 },
  { country: "Canada", exchanges: 300 },
  { country: "UK", exchanges: 200 },
  { country: "Australia", exchanges: 150 },
  { country: "Germany", exchanges: 100 },
];

const customStyles = {
  paper: {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    boxShadow: "0px 0px 8px 0px #000",
  },
};

const LabelData = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {exchangeData.map((entry, index) => (
        <div
          key={index}
          style={{ display: "flex", flexDirection: "row", margin: "0.5rem" }}
        >
          {entry.country}: {entry.exchanges}
        </div>
      ))}
    </div>
  );
};

const ExchangeGraph = () => {
  return (
    <Paper elevation={3} style={customStyles.paper}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Times New Roman",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "32px",
          lineHeight: "37px",
        }}
      >
        Exchanges by Country
      </Typography>
      <ResponsiveContainer width="100%" height={330}>
        <PieChart>
          <Pie
            data={exchangeData}
            dataKey="exchanges"
            labelLine={false}
            fill={COLORS}
          >
            {exchangeData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <LabelData />
    </Paper>
  );
};

export default ExchangeGraph;
