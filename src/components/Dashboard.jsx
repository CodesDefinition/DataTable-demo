import React from "react";
import Navbar from "./Navbar";

function Dashboard({ userName }) {
  return (
    <div>
      <Navbar userName={userName} />
    </div>
  );
}

export default Dashboard;
