import React from "react";
import { Card, CardContent } from "@mui/material";
import Layout from "../../../components/Layout/Layout";
import { Link } from "react-router-dom";
import DarkwebGraph from "./DarkwebGraph";
import ExchangeGraph from "./ExchangeGraph";
import RealtimeGraph from "./RealtimeGraph";
import AlertGraph from "./AlertGraph";
import { motion } from "framer-motion";
import jwt_decode from "jwt-decode";
import { getToken } from "../../../helpers/jwtInterceptor";

const CustomCard = ({ to, title }) => {
  const customStyles = {
    card: {
      width: "20%",
      margin: "1rem",
      bgcolor: "#DAA520",
      color: "black",
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "15px",
      "&:hover": {
        backgroundColor: "darkgoldenrod",
        cursor: "pointer",
      },
    },
  };

  return (
    <Card sx={customStyles.card} component={Link} to={to}>
      <CardContent>
        <h3 style={{ textDecoration: "inherit", marginTop: "0.5rem" }}>
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const UserEmail = () => {
    const token = getToken();
    const decodedToken = jwt_decode(token);
    const email = decodedToken.email;
    const isAdmin = email.includes("@hornet.technology");
    return isAdmin;
  };

  const isAdmin = UserEmail();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <CustomCard to="/DarkWeb" title="DarkWebsites" />
          <CustomCard to="/Exchange" title="Exchanges" />
          {isAdmin && (
            <CustomCard
              to="/cryptoTransactions"
              title="Real-time Transactions"
            />
          )}
          <CustomCard to="/searchAddress" title="Analyse Wallet" />
          <CustomCard to="/monitor" title="Monitor Asset" />
        </div>

        <div
          style={{
            backgroundColor: "#DAA520",
            minHeight: "100vh",
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "1rem",
            marginTop: "2rem",
          }}
        >
          <DarkwebGraph />
          <ExchangeGraph />
          <RealtimeGraph />
          <AlertGraph />
        </div>
      </Layout>
    </motion.div>
  );
};

export default Dashboard;
