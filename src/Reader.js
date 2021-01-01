import React from "react";
import "./Reader.css";
import Editor from "./Editor";

function Reader() {
  return (
    <div className="reader">
      <h1>Shared Text</h1>
      <Editor
        code="import"
        langUsed="Python"
      ></Editor>
    </div>
  );
}

export default Reader;
