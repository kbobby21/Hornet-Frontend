import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Layout from "../../../components/Layout/Layout";
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
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Link } from "react-router-dom";
import RingLoader from "../RingLoader";
import { useGetAssetActivityQuery } from "../../../Service/api";

const AssetActivity = () => {
  const [searchInput, setSearchInput] = useState(""); // State to manage search input
  const [, setActivityData] = useState([]);
  const [, setFilteredActivityData] = useState([]);

  const { data: apiData, isLoading: loading } = useGetAssetActivityQuery();

  const memoizedActivityData = useMemo(() => apiData?.data || [], [apiData]);

  useEffect(() => {
    setActivityData(memoizedActivityData);
  }, [memoizedActivityData, searchInput]);

  const handleSearchInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);

    const filteredData = memoizedActivityData.filter((item) =>
      item.activities.includes(input)
    );
    setFilteredActivityData(filteredData);
  };

  const renderTableRows = () => {
    return Array.isArray(memoizedActivityData) &&
      memoizedActivityData.length > 0
      ? memoizedActivityData.map((row, index) => {
          if (row.activities.includes(searchInput)) {
            return (
              <TableRow
                key={index}
                style={{ backgroundColor: "#E1C846", cursor: "pointer" }}
              >
                <TableCell sx={{ textAlign: "center" }}>
                  {row.asset_id}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {row.activities}
                </TableCell>
              </TableRow>
            );
          } else {
            return (
              <TableRow key={index}>
                <TableCell sx={{ textAlign: "center" }}>
                  {row.asset_id}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {row.activities}
                </TableCell>
              </TableRow>
            );
          }
        })
      : null;
  };

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
                padding: "0.5rem",
                width: "920px",
                height: "auto",
                backgroundColor: "#fff",
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
                    Your Activity
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    border: "2px solid #000",
                    borderRadius: "15px",
                    backgroundColor: "rgba(119, 119, 119, 0.07)",
                    marginLeft: "6rem",
                  }}
                >
                  <TextField
                    variant="standard"
                    placeholder="Search "
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    sx={{ marginLeft: "1rem", marginBottom: "0.5rem" }}
                  />
                  <SearchIcon sx={{ margin: "0.5rem" }} />
                </Box>
                <Box sx={{ marginLeft: "1rem" }}>
                  <Link to="/monitor">
                    <AddCircleOutlinedIcon
                      sx={{
                        fontSize: "2.5rem",
                        marginLeft: "0.1rem",
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
                    }}
                  >
                    <Table responsive>
                      <TableHead
                        style={{
                          backgroundColor: "rgba(121, 121, 121, 0.25)",
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
                          <TableCell sx={{ textAlign: "center" }}>
                            Your Asset Id
                          </TableCell>
                          <TableCell>Activity</TableCell>
                        </TableRow>
                      </TableHead>
                      {memoizedActivityData &&
                      memoizedActivityData.length === 0 ? (
                        <Typography
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                            fontFamily: "Times New Roman",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "32px",
                            lineHeight: "37px",
                            marginLeft: "7.5rem",
                            marginTop: "13rem",
                          }}
                        >
                          No Activity Found
                        </Typography>
                      ) : (
                        <TableBody>{renderTableRows()}</TableBody>
                      )}
                    </Table>
                  </TableContainer>
                )}
              </Box>
            </Box>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};
export default AssetActivity;
