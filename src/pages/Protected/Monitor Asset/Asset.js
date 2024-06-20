import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../Theme/theme";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Image from "../../../images/Background5.jpg";
import { TableContainer } from "@mui/material";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import RingLoader from "../RingLoader";
import { motion } from "framer-motion";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useGetAssetsQuery } from "../../../Service/api";

const Asset = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedRow, setSelectedRow] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const {
    data: responseData,
    isLoading: loading,
    refetch,
  } = useGetAssetsQuery({
    page_no: currentPage,
    search: searchInput,
  });

  const apiData = responseData?.data || [];

  const handlePageChange = (event, page) => {
    console.log("New Page:", page);
    setCurrentPage(page);
  };

  const handleRowClick = (index) => {
    setSelectedRow(index);
    window.location.href = `/assetActivity`;
  };

  useEffect(() => {
    const fetchData = async () => {
      await refetch({
        page_no: currentPage,
        search: searchInput,
      });
    };
    fetchData();
  }, [currentPage, searchInput, refetch]);

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Layout>
          <Box
            sx={{
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
            <Box
              sx={{
                position: "absolute",
                width: "920px",
                padding: "0.5rem",
                height: "auto",
                backgroundColor: "#FFF",
                borderRadius: "15px",
                boxShadow: "0px 0px 8px 3px #888888",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "row", margin: "0.6rem" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    marginLeft: "2rem",
                    width: "40%",
                  }}
                >
                  <Typography
                    sx={{ color: "#000", fontWeight: "bold", fontSize: "23px" }}
                  >
                    Your Assets
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    border: "2px solid #000",
                    borderRadius: "15px",
                    backgroundColor: "rgba(119, 119, 119, 0.07)",
                    marginLeft: "3rem",
                  }}
                >
                  <TextField
                    variant="standard"
                    placeholder="Search Asset Value"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    sx={{ marginLeft: "1rem", marginBottom: "0.5rem" }}
                  />
                  <SearchIcon sx={{ margin: "0.5rem" }} />
                </Box>
                <Box sx={{ marginLeft: "1.2rem" }}>
                  <Link to="/monitor">
                    <AddCircleOutlinedIcon
                      sx={{
                        fontSize: "2.5rem",
                        marginLeft: "0.3rem",
                        marginTop: "0.1rem",
                        color: "#000",
                      }}
                    />
                  </Link>
                </Box>
              </Box>
              <Box>
                {loading ? (
                  <div>
                    <RingLoader />
                  </div>
                ) : (
                  <TableContainer
                    style={{
                      overflowX: "auto",
                      borderRadius: "15px",
                      height: "600px",
                      backgroundColor: "#D9D9D9",
                      border: "1px solid #000",
                    }}
                  >
                    <Table responsive="true">
                      <TableHead
                        style={{
                          backgroundColor: "rgba(121, 121, 121, 0.25)",
                          color: theme.palette.special.main,
                          padding: "10px",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        <TableRow>
                          <TableCell sx={{ textAlign: "center" }}>
                            Your Asset Id
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            Date
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            Asset Type
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            Asset Value
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            Risk Score
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Array.isArray(apiData) && apiData.length > 0 ? (
                          apiData.map((row, index) => {
                            const isMatching =
                              row.asset_value.includes(searchInput) ||
                              row.asset_id.toString().includes(searchInput);

                            return (
                              <TableRow
                                key={index}
                                onClick={() => handleRowClick(index)}
                                style={
                                  isMatching
                                    ? {
                                        backgroundColor:
                                          selectedRow === index
                                            ? "#E1C846"
                                            : "#D9D9D9",
                                        cursor: "pointer",
                                      }
                                    : { display: "none" }
                                }
                              >
                                <TableCell sx={{ textAlign: "center" }}>
                                  {row.asset_id}
                                </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                  {new Date(row.timestamp).toLocaleDateString(
                                    "en-UK",
                                    {
                                      year: "numeric",
                                      month: "numeric",
                                      day: "numeric",
                                    }
                                  )}{" "}
                                  {new Date(row.timestamp).toLocaleTimeString(
                                    "en-UK",
                                    {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    }
                                  )}
                                </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                  {row.asset_type}
                                </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                  {row.asset_value}
                                </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                  {row.risk_score}
                                </TableCell>
                              </TableRow>
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} sx={{ textAlign: "center" }}>
                              No data available
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                marginTop: "48rem",
                justifyContent: "center",
              }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                shape="rounded"
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
            </Box>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default Asset;
