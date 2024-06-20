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
import { useNavigate } from "react-router-dom";
import theme from "../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Image from "../../../images/Background5.jpg";
import Pagination from "@mui/material/Pagination";
import { TableContainer } from "@mui/material";
import { Tooltip } from "@mui/material";
import RingLoader from "../RingLoader";
import { motion } from "framer-motion";
import { useGetDarkWebQuery } from "../../../Service/api";

const DarkWeb = () => {
  // const [totalPages, setTotalPages] = useState(10);
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { data: Data, isLoading: loading } = useGetDarkWebQuery(currentPage);

  const darkWebData = Data?.data || [];

  const handleAddData = () => {
    navigate("/addDarkWeb");
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
                Dark Web Data
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Button
                variant="contained"
                onClick={handleAddData}
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.special.main,
                  borderRadius: "5px",
                  padding: "10px 20px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  "&:hover": {
                    backgroundColor: "#ff0000",
                  },
                }}
              >
                Add Data
              </Button>
            </div>
            <div
              style={{
                marginTop: "20px",
                padding: "25px",
                [theme.breakpoints.down("sm")]: {
                  marginTop: "20px",
                  overflowX: "auto",
                },
              }}
            >
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
                        textAlign: "left",
                        [theme.breakpoints.down("sm")]: {
                          whiteSpace: "nowrap",
                          minWidth: "80px",
                          padding: "8px",
                        },
                      }}
                    >
                      <TableRow>
                        <TableCell>Website Name</TableCell>
                        <TableCell>Onion URL</TableCell>
                        <TableCell>Wallet Address</TableCell>
                        <TableCell>Tags</TableCell>
                        <TableCell>Discovered At</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Array.isArray(darkWebData) &&
                        darkWebData.map((row, index) => (
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
                              {" "}
                              {row.website_name}
                            </TableCell>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                overflow: "hidden", // Truncate text to fit 40 characters
                                textOverflow: "ellipsis", // Show ellipsis (...) for truncated text
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "80px",
                                  padding: "8px",
                                },
                              }}
                            >
                              <Tooltip title={row.onion_url} placement="bottom">
                                {row.onion_url.length > 40 ? (
                                  <span>{row.onion_url.slice(0, 40)}...</span>
                                ) : (
                                  <span>{row.onion_url}</span>
                                )}
                              </Tooltip>
                            </TableCell>
                            <TableCell
                              style={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.special.main,
                                padding: "10px",
                                overflow: "hidden", // Truncate text to fit 40 characters
                                textOverflow: "ellipsis", // Show ellipsis (...) for truncated text
                                [theme.breakpoints.down("sm")]: {
                                  whiteSpace: "nowrap",
                                  minWidth: "80px",
                                  padding: "8px",
                                },
                              }}
                            >
                              <Tooltip
                                title={row.wallet_address}
                                placement="bottom"
                              >
                                {row.wallet_address.length > 40 ? (
                                  <span>
                                    {row.wallet_address.slice(0, 40)}...
                                  </span>
                                ) : (
                                  <span>{row.wallet_address}</span>
                                )}
                              </Tooltip>
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
                              {row.tag}
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
                              {new Date(row.discovered_at).toLocaleDateString(
                                "en-UK",
                                {
                                  year: "numeric",
                                  month: "numeric",
                                  day: "numeric",
                                }
                              )}{" "}
                              {new Date(row.discovered_at).toLocaleTimeString(
                                "en-UK",
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
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
          </div>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default DarkWeb;
