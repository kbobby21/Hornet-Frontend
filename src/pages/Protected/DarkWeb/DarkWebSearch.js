import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { ThemeProvider } from "@mui/material/styles";
import Layout from "../../../components/Layout/Layout";
import Image from "../../../images/Background5.jpg";
import theme from "../../../Theme/theme";
import { motion } from "framer-motion";
import {
  Box,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const DarkWebSearch = () => {
  const searchResults = [
    {
      url: "abc.com/pqr/xyz",
      website_name: "abc",
      category: ["guns", "drugs"],
    },
    {
      url: "def.com/uvw/xyz",
      website_name: "def",
      category: ["tech", "news"],
    },
    {
      url: "",
      website_name: "xyz",
      category: ["guns", "news"],
    },
    {
      url: "def.com/uvw/xyz",
      website_name: "",
      category: ["tech", "news"],
    },
    // Add more data as needed
  ];

  // Get the location object using useLocation hook
  const location = useLocation();

  // Parse the search term from the query string
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("searchTerm");

  // Filter search results based on the searchTerm
  const filteredResults = searchResults.filter((result) =>
    result.website_name.toLowerCase().includes(searchTerm?.toLowerCase() ?? "")
  );

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
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover", // Set background size to cover
              backgroundAttachment: "fixed",
              padding: theme.spacing(5),
              [theme.breakpoints.down("sm")]: {
                padding: theme.spacing(5),
              },
              flexDirection: "column",
              backgroundColor: "#f2f2f2",
              fontFamily: "Poppins, Arial, sans-serif",
            }}
          >
            <Box>
              <Table
                sx={{
                  width: "100vh",
                  maxWidth: 800,
                  margin: 2,
                }}
              >
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
                    <TableCell>URL</TableCell>
                    <TableCell>Categories</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredResults.map((result, index) => (
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
                        {result.website_name}
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
                        <Link href={result.url} target="_blank" rel="">
                          {result.url}
                        </Link>
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
                        {result.category.join(", ")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default DarkWebSearch;
