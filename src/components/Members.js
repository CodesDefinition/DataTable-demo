import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditForm from "./EditForm";
import DeleteForm from "./DeleteForm";
import styles from "../css/members.module.css";

export default function Members() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [member, setmember] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [lastName, setlastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");

  const addMember = () => {
    let id = member.length + 1;
    let data = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
    };
    setmember([data, ...member]);
  };
  const delMember = (id) => {
    const filter = member.filter((user) => user.id !== id);
    setmember(filter);
  };
  const getMember = (id) => {
    const filterMembers = member.filter((mem) => mem.id === id);
    setEmployee(filterMembers);
    handleOpen(true);
  };
  const updateMember = (employee) => {
    const index = member.findIndex((mem) => mem.id === employee.id);
    member[index].lastName = employee.lastName;
    member[index].firstName = employee.firstName;
    member[index].middleName = employee.middleName;
    setOpen(false);
  };
  return (
    <div className="container">
      <div className={styles.memberForm}>
        <TextField
          id="outlined-basic"
          label="Enter First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Enter Last Name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Enter Middle Name"
          variant="outlined"
          value={middleName}
          onChange={(e) => setmiddleName(e.target.value)}
        />
        <Button variant="outlined" onClick={addMember}>
          Add Member
        </Button>
      </div>
      <TableContainer component={Paper} className={styles.dataTable}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <h2 className={styles.title}>Group Study Members</h2>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Middle Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {member.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="center"
                  id={row.id}
                  component="th"
                  scope="row"
                >
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.middleName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => getMember(row.id)}
                    sx={{ mr: 2 }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => delMember(row.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditForm
        open={open}
        handleClose={handleClose}
        updtMember={updateMember}
        member={employee}
      />
    </div>
  );
}
