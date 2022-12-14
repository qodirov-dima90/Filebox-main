import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AuthProvider from "./contexts/AuthContext";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Forgot from "./Components/Forgot";
import "./App.css";

import Task from "./Components/Task";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/dashboard" element={<PrivateRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route exact path="/task" element={<PrivateRoute />}>
              <Route exact path="/task" element={<Task />} />
            </Route>
            <Route exact path="/forgot" element={<Forgot />}></Route>
            <Route exact path="/folder/:folderId" element={<PrivateRoute />}>
              <Route path="" element={<Task />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;