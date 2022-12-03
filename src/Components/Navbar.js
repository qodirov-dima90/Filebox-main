import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Logo.png";
import home from "./home.png";
import user from "./user.png";
const Navbar = () => {
  return (
    <>

      <div class="container">
        <div class="row">
          <div class="col-3">
            <div className="flex flex-row">
              <div className="box_img">
                <img src={logo} alt="box img" />
              </div>
            </div>

            <div className="bs">
              <div className="titlebox">
                Filebox
              </div>
            </div>

          </div>

          <div class="col-6">

          </div>
          <div class="col-3">
            <div className="man">
              <div className="flex flex-row justify-center mt-10">
                <div> <Link className="no-underline  m-5 text-sky-200" to="/"><img src={home} className="w-60 h-30" alt="" /></Link></div>
                <div><Link className="no-underline m-5 text-sky-200" to="/dashboard"><img src={user} className="w-80 h-30" alt="" /></Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default Navbar;