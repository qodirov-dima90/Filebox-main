import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ffile from "./file.png"
const File = ({ file }) => {

  function stringer(a) {
    let aa = "";
    if (a.length < 10) {
      return a;
    }
    for (let i = 0; i < 10; i++) {
      aa += a[i];
    }
    aa += "...";
    return aa;
  }
  return (
    <div className="flex flex-wrap rounded-lg m-1 border-2 border-sky-400 flex-col p-2">
      <div className="flex flex-wrap justify-center"><img src={ffile} className="w-10 h-10" alt="" />
      </div>
      <a href={file.url} target="_blank" className="text-1xl text-gray-500 hover:text-sky-500 no-underline">
        {stringer(file.name)}
      </a>
    </div>
  );
};

export default File;