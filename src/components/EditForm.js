import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import styles from "../css/editform.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function EditForm({ open, handleClose, updtMember, member }) {
  const [id, setID] = useState("");
  const [lastName, setlastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");

  const updateMember = (e) => {
    e.preventDefault();
    let member = {
      id: id,
      lastName: lastName,
      firstName: firstName,
      middleName: middleName,
    };
    updtMember(member);
  };

  useEffect(() => {
    if (member.length != 0) {
      setID(member[0].id);
      setlastName(member[0].lastName);
      setfirstName(member[0].firstName);
      setmiddleName(member[0].middleName);
    }
  }, [member]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update member details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
              <Button variant="outlined" onClick={updateMember}>
                Update Member
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default EditForm;
