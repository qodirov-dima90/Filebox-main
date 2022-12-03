import React, { Component, useState } from "react";
import { useFolder } from "../Hooks/useFolder";
import AddFolder from "./AddFolder";
import Folder from "./Folder";
import File from "./File";
import { useParams } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";
const Task = (props) => {
  const { folderId } = useParams();
  console.log("chilling", folderId);

  const { folder, childFolders, childFiles } = useFolder(folderId);

  return (
    <>
      <AddFolder currentFolder={folder} />
      <BreadCrumbs currentFolder={folder} />
      {folder && <Folder folder={folder} />}
      <div className="flex flex-wrap justify-center">
        {childFolders.length > 0 &&
          childFolders.map((x) => <Folder key={x.id} folder={x} />)}
      </div>



      {childFolders.length > 0 && childFiles.length > 0 && <hr />}
      <div className="container">
        <div className="flex flex-wrap flex-start p-2 m-2">
          {childFiles.length > 0 &&
            childFiles.map((x) => <File key={x.id} file={x} />)}
        </div>
      </div>
    </>
  );
};
export default Task;