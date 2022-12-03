import React, { Component, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [errStyle, setErrStyle] = useState({ display: "none" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setErrStyle({ display: "none" });
    let em = email;
    em = em.trim();
    let pss = password;
    pss = pss.trim();
    if (!em || !pss) {
      setError("email or password not found");
      setErrStyle({ display: "block" })
      setEmail("");
      setPassword("");
      return;
    }
    try {
      setError("");
      setLoading(true);
      setErrStyle({ display: "none" });
      await login(email, password);
      navigate("/dashboard");
    } catch {
      setError("email or password is incorrect");
      setErrStyle({ display: "block" });
    }
    setLoading(false);
  };

  return (
    <>
      <div className="din">
        <div className="flex flex-row flex-wrap justify-center">

          <form
            onSubmit={(e) => handleSubmit(e)}
            className="md-10 w-50 flex flex-col rounded-lg m-2 border-2 border-red-300 text-center flex-wrap bg-gray-200 p-2 loginClass"
          >
            <div style={errStyle} className="text-red-600 text-2xl text-center bg-gray-100">{error}</div>
            <div className="text-3xl m-2 loginClass text-gray-700">Login</div>

            <div className="flex flex-col flex-wrap loginClass">
              <label className="block m-1 text-2xl text-gray-800 loginClass" for="email">
                Email
              </label>
              <div className="border-2 border-gray-100 m-1 loginClass">
                <input
                  className="p-2 text-xl text-gray-800 w-80 border-gray-300 border-2 focus:border-gray-500 outline-none loginClass"
                  type="email"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={`enter your email address`}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap loginClass">
              <label className="block m-1 text-2xl text-gray-800 loginClass" for="password">
                Password
              </label>
              <div className="border-2 border-gray-100 m-1 loginClass">
                <input
                  className="p-2 text-xl text-gray-800 w-80 border-gray-300 border-2 focus:border-gray-500 outline-none loginClass"
                  type="password"
                  id="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={`enter your password`}
                />
              </div>
            </div>
            <div className="loginClass">
              <button type="submit" class="text-2xl text-gray-800 px-5 py-2 rounded-lg m-3 border-2 border-blue-400 hover:bg-blue-200 loginClass" disabled={loading}>
                login
              </button>
            </div>
            <div className="flex justify-content-around text-center loginClass">
              <div className="m-1 loginClass">

                <Link to="/forgot" className="no-underline text-red-700 text-xl loginClass">forgot password</Link>

              </div>
              <div className="m-1 loginClass">
                <Link to="/signup" className="no-underline text-red-700 text-xl loginClass">
                  signup
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;