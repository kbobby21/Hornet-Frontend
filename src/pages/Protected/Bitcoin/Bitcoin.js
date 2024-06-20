import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Layout from "../../../components/Layout/Layout";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import Image from "../../../images/Background5.jpg";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../Theme/theme";
import { TableContainer } from "@mui/material";
import RingLoader from "../RingLoader";
import { motion } from "framer-motion";
import { useGetBitcoinDataQuery } from "../../../Service/api";

const Bitcoin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [senderSearchTerm, setSenderSearchTerm] = useState("");
  const [receiverSearchTerm, setReceiverSearchTerm] = useState("");

  const navigate = useNavigate();
  const {
    data: Data,
    isLoading,
    refetch,
  } = useGetBitcoinDataQuery({
    page: currentPage,
    sender: senderSearchTerm.trim() !== "" ? senderSearchTerm : "all",
    receiver: receiverSearchTerm.trim() !== "" ? receiverSearchTerm : "all",
  });

  const tableData = Data?.data || [];

  const handleAddData = () => {
    navigate("/addCryptoTransactions");
  };

  const handleSearch = () => {
    refetch();
  };
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    refetch({ page });
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
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
                color: "goldenrod",
                textShadow: "2px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
                Bitcoin Transactions
              </h1>
              <div
                style={{
                  display: "flex",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Search Sender"
                  value={senderSearchTerm}
                  onChange={(event) => setSenderSearchTerm(event.target.value)}
                  style={{
                    marginRight: "10px",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="text"
                  placeholder="Search Receiver"
                  value={receiverSearchTerm}
                  onChange={(event) =>
                    setReceiverSearchTerm(event.target.value)
                  }
                  style={{
                    marginRight: "10px",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  onClick={handleSearch}
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.special.main,
                    borderRadius: "5px",
                    padding: "8px 16px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                    "&:hover": {
                      backgroundColor: "#ff0000",
                    },
                  }}
                >
                  Go
                </button>
              </div>
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
              {isLoading ? (
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
                        padding: "12px",
                        fontWeight: "bold",
                        textAlign: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",

                        [theme.breakpoints.down("sm")]: {
                          width: "100%",
                          borderCollapse: "collapse",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      <TableRow style={{}}>
                        <TableCell>Block Number</TableCell>
                        <TableCell>Sender</TableCell>
                        <TableCell>Receiver</TableCell>
                        <TableCell>Timestamp</TableCell>
                        <TableCell>Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Array.isArray(tableData) &&
                        tableData.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "80px",
                                  padding: "8px",
                                },
                              }}
                            >
                              {row.block_num}
                            </TableCell>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "80px",
                                  padding: "8px",
                                },
                              }}
                            >
                              {row.sender}
                            </TableCell>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "80px",
                                  padding: "8px",
                                },
                              }}
                            >
                              {row.receiver}
                            </TableCell>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "80px",
                                  padding: "8px",
                                },
                              }}
                            >
                              {row.timestamp}
                            </TableCell>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "80px",
                                  padding: "8px",
                                },
                              }}
                            >
                              {row.amount}
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

export default Bitcoin;
