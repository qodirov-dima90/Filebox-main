import React, { Component } from 'react';
import welcomeImg from '../img/Filebox.png';
const Heading = () => {

  return (
    <div className="welcome_text">
      <div className="heading_img flex-auto">
        <img src={welcomeImg} className="w-70 h-40" alt="welcomeImg" />
      </div>
      <div className="m-2 p-2 flex-auto">
        <div className="text-sky-300  font-semibold text-center md:text-6xl text-4xl">
          Welcome to Filebox
        </div>
        <p className="text-gray-300 text-center md:text-4xl text-2xl">we are ready to serve your memories...</p>
      </div>
    </div>
  );
}
export default Heading;