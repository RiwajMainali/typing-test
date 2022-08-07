import React, { useEffect, useState } from "react";
import Login from "../Account/Login";
import Dashboard from "../Account/Dashboard";
import Register from "../Account/Register";
import Reset from "../Account/Reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Popup.css";
export default function Popup(props) {
  return props.Trigger ? (
    <>
      <div className="Popup">
        <div className="Popup-inner">
          <button
            className="button-23  close-btn"
            onClick={() => props.setTrigger(false)}
          >
            Close
          </button>
          <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/reset" element={<Reset />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
