import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Layout from "../../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import theme from "../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Image from "../../../images/Background5.jpg";
import Pagination from "@mui/material/Pagination";
import RingLoader from "../RingLoader";
import { motion } from "framer-motion";
import { useGetExchangeQuery } from "../../../Service/api";

const Exchange = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const navigate = useNavigate();

  const { data: Data, isLoading: loading } = useGetExchangeQuery(currentPage);

  const exchangeData = Data?.data || [];

  const handleAddData = () => {
    navigate("/addExchange");
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
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
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              minHeight: "100vh",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
                color: theme.palette.primary.main,
                textShadow: "2px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
                Exchange Data
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                marginBottom: "20px",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={handleAddData}
                style={{ marginTop: "20px" }}
              >
                Add Data
              </Button>
            </div>

            <div style={{ marginTop: "20px", padding: "25px" }}>
              {loading ? (
                <div>
                  <RingLoader />
                </div>
              ) : (
                <TableContainer style={{ overflowX: "auto" }}>
                  <Table responsive>
                    <TableHead
                      style={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.special.main,
                        padding: "10px",
                        fontWeight: "bold",
                        textAlign: "center",
                        [theme.breakpoints.down("sm")]: {
                          width: "100%",
                          borderCollapse: "collapse",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Number</TableCell>
                        <TableCell>Wallet</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Array.isArray(exchangeData) &&
                        exchangeData.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "120px",
                                  padding: "8px",
                                },
                              }}
                            >
                              {row.name}
                            </TableCell>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "120px",
                                  padding: "8px",
                                },
                              }}
                            >
                              {row.country}
                            </TableCell>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "120px",
                                  padding: "8px",
                                },
                              }}
                            >
                              {row.contact_email}
                            </TableCell>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "120px",
                                  padding: "8px",
                                },
                              }}
                            >
                              {row.contact_number}
                            </TableCell>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "120px",
                                  padding: "8px",
                                },
                              }}
                            >
                              {row.wallet_address}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                justifyContent: "center",
              }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "white",
                    "&:hover": {
                      backgroundColor: "goldenrod",
                      color: "black",
                    },
                  },
                }}
              />
            </div>
          </div>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default Exchange;
