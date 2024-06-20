import React, { useState, useEffect } from "react";
import {
  TableCell,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableBody,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useGetTransactionDataQuery } from "../../../Service/api";

const TransactionDetails = ({ search, updateAddress }) => {
  const navigate = useNavigate();

  // const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const walletAddress = searchParams.get("wallet");
  const [, setSelectedAddress] = useState(null);

  const { data: Data, error } = useGetTransactionDataQuery(walletAddress, {
    enabled: !!walletAddress,
  });

  const transactionData = Data?.data || [];

  useEffect(() => {
    if (error) {
      console.error("Failed to fetch data from the server.", error);
    }
  }, [error]);

  const handleCopyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Copied "${text}"`);
      })
      .catch((error) => {
        console.error("Copy failed:", error);
      });
  };

  const handleIcon = (address) => {
    setSelectedAddress(address);
    updateAddress(address);
    navigate("/searchDetail");
  };

  return (
    <TableContainer
      style={{ height: "439px", width: "72rem", overflow: "hidden" }}
    >
      <Table responsive="true">
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: "center" }}>Block Number</TableCell>
            <TableCell style={{ textAlign: "center" }}>Sender</TableCell>
            <TableCell style={{ textAlign: "center" }}>Receiver</TableCell>
            <TableCell style={{ textAlign: "center" }}>Amount</TableCell>
            <TableCell style={{ textAlign: "center" }}>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {search === ""
            ? transactionData &&
              transactionData.map((row, index) => (
                <TableRow
                  sx={{ background: "rgba(217, 217, 217, 0.5)" }}
                  key={index}
                >
                  <TableCell style={{ textAlign: "center" }}>
                    {row.block_num}
                  </TableCell>
                  <TableCell style={{ textAlign: "center", whiteSpace: "pre" }}>
                    {row.sender}
                    <IconButton
                      onClick={() => handleCopyText(row.sender, "Sender")}
                    >
                      <FileCopyIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell style={{ textAlign: "center", whiteSpace: "pre" }}>
                    {row.receiver}
                    <AddCircleRoundedIcon
                      onClick={() => handleIcon(row.receiver)}
                      sx={{ ml: "0.2rem", color: "#000" }}
                    />
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.amount}
                  </TableCell>
                  <TableCell sx={{ whiteSpace: "pre" }}>
                    {new Date(row.timestamp).toLocaleDateString("en-UK", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}{" "}
                    {new Date(row.timestamp).toLocaleTimeString("en-UK", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </TableCell>
                </TableRow>
              ))
            : transactionData &&
              transactionData.map((row, index) => (
                <TableRow
                  style={
                    row.block_num.toString().includes(search) ||
                    row.sender.includes(search) ||
                    row.receiver.includes(search)
                      ? { backgroundColor: " #E1C846", cursor: "pointer" }
                      : { display: "none" }
                  }
                  key={index}
                >
                  <TableCell style={{ textAlign: "center" }}>
                    {row.block_num}
                  </TableCell>
                  <TableCell style={{ textAlign: "center", whiteSpace: "pre" }}>
                    {row.sender}
                    <IconButton
                      onClick={() => handleCopyText(row.sender, "Sender")}
                    >
                      <FileCopyIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell style={{ textAlign: "center", whiteSpace: "pre" }}>
                    {row.receiver}
                    <AddCircleRoundedIcon
                      onClick={() => handleIcon(row.receiver)}
                      sx={{ ml: "0.8rem", color: "#000" }}
                    />
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.amount}
                  </TableCell>
                  <TableCell>
                    {new Date(row.timestamp).toLocaleDateString("en-UK", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}{" "}
                    {new Date(row.timestamp).toLocaleTimeString("en-UK", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TransactionDetails;
