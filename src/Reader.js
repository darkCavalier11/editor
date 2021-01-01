import React from "react";
import "./Reader.css";
import Editor from "./Editor";
import { useStateValue } from "./StateProvider";

function Reader() {
  const [{lang, text, key}, dispath] = useStateValue();
  return (
    <div className="reader">
      <h1>Shared Text</h1>
      <Editor lang={lang} text={text}></Editor>
    </div>
  );
}

export default Reader;
