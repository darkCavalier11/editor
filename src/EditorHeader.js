import React from "react";
import { useStateValue } from "./StateProvider";
import "./EditorHeader.css";
function EditorHeader({
  defaultLang = "Text",
  date = new Date().toDateString(),
}) {
  return (
    <div className="eheader">
      <p>{defaultLang}</p>
      <p className="eheader__date">{date}</p>
    </div>
  );
}

export default EditorHeader;
