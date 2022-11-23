import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styles from "../css/login.module.css";
import { style } from "@mui/system";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ userName, setuserName }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Dashboard");
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <TextField
          id="outlined-basic"
          label="Enter username here"
          variant="outlined"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Enter password here    "
          variant="outlined"
          type="password"
        />
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
