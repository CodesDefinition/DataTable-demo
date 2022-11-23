import React from "react";
import Navbar from "./components/Navbar";
import Members from "./components/Members";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App(props) {
  const [userName, setuserName] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login userName={userName} setuserName={setuserName} />}
          />
          <Route path="/Members" element={<Members />} />
          <Route
            path="/Dashboard"
            element={<Dashboard userName={userName} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
