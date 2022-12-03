import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
    return (
        <div className="text-center m-2"><button style={{ marginTop: "30px" }} className="text-4xl  rounded-lg "><Link class="no-underline text-3xl text-gray-800 px-5 py-3 rounded-lg m-10 border-2 border-blue-400 hover:bg-blue-200 loginClass" to="/task">Lets start</Link></button></div>
    );
}
export default Main;