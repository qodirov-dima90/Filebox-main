import React, { Component, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import UserLogin from "./user-login.png";

const Dashboard = () => {
  var { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [errStyle, setErrStyle] = useState({ display: "none" });

  if (currentUser === undefined) {
    currentUser = JSON.parse(localStorage.getItem("localKey"));
  }

  localStorage.setItem("localKey", JSON.stringify(currentUser));
  const handleLogout = () => {
    logout();
    console.log("hello logout");
    localStorage.removeItem("localKey");
    logout();
    try {
      logout();
    }
    catch {
      setError("Error signing out");
      setErrStyle({ display: "block" });
    }
  };

  return (
    <>
      <div className="di">
        <div className="text-center flex flex-wrap justify-center">
          <div className="border-2 border-gray-200 basis-1/2 p-2 rounded-lg">
            <div className="text-center flex flex-col flex-wrap">
              <div className="flex flex-wrap justify-center">
                <div className="text-center w-40 h-40">
                  <img src={UserLogin} className="w-40 h-40 m-1" />
                </div>
              </div>
              <div className="text-3xl text-gray-200 p-1 m-1">Profile Section</div>
              <div className="text-2xl text-sky-200 p-1 m-1">{`Your email`}</div>
              <div className="text-2xl text-sky-400 p-1 mb-5">{currentUser.email}</div>
              <div className="text-center m-3 flex justify-center ">
                <button>
                  <Link
                    to="/task"
                    class="no-underline text-2xl text-gray-800 px-4 py-2 rounded-lg mt-1 border-2 border-blue-400 hover:bg-blue-200 loginClass"
                  >
                    Lets start
                  </Link>
                </button>


                <button type="submit" onClick={handleLogout}>
                  <Link
                    className="px-4 py-2 text-2xl text-gray-800 rounded-lg m-2 border-2 border-red-300 hover:bg-red-500 "
                    style={{ textDecoration: "none", color: "white" }}
                    to="/login"
                  >
                    Log Out
                  </Link>
                </button>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;