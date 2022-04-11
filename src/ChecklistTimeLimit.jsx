import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";

function createData(steps, actions, days, affected) {
  return { steps, actions, days, affected };
}

const rows = [
  createData("Step 1", "Filed within", "14 days", "from incident date"),
  createData("Step 2", "Desicion within", "5 days", "of meeting"),
  createData("Step 2", "Appeal within", "10 days", "of step 1 decision"),
  createData("step 2", "meeting within", "7 days", "of Appeal"),
  createData("Step 2", "desicion within", "10 days", "of step 2 decision"),

  createData(
    "",
    "Submission of corrections and/or Additions within",
    "10 days",
    "of step 2 decision"
  ),
  createData("Step 3", "Appeal within", "15 days", "of step 2 decision"),
  createData(
    "",
    "Additions does not change time requirements for step 3 Appeal",
    "",
    ""
  ),
];

export function ChecklistTable() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h5"
        lineHeight={2}
        textAlign="center"
        color="text.primary"
      >
        Time Deadlines
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Steps</TableCell>
              <TableCell align="right">Actions</TableCell>
              <TableCell align="right">Days of Limitation</TableCell>
              <TableCell align="right">Affected by</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.steps}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="right">
                  {row.steps}
                </TableCell>
                <TableCell align="right">{row.actions}</TableCell>
                <TableCell align="right">{row.days}</TableCell>
                <TableCell align="right">{row.affected}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
