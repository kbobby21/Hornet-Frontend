import React from "react";
import {
  TableCell,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableBody,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useGetBeneficiaryDataQuery } from "../../../Service/api";

const BeneficiaryDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const walletAddress = searchParams.get("address");

  const { data: Data } = useGetBeneficiaryDataQuery(walletAddress);
  const beneficiaryData = Data?.data || [];

  return (
    <TableContainer style={{ height: "439px" }}>
      <Table responsive="true">
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: "center" }}>Receiver</TableCell>
            <TableCell style={{ textAlign: "center" }}>
              Total Received
            </TableCell>
            <TableCell style={{ textAlign: "center" }}>Exchange</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beneficiaryData &&
            beneficiaryData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.receiver}</TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {row.total_received}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BeneficiaryDetails;
