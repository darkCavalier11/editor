import React from "react";
import "./Reader.css";
import Editor from "./Editor";
import axios from "axios";
import { useEffect, useState } from "react";

function Reader() {
  const backendUrl = "http://localhost:7000";
  const path = window.location.pathname;
  const [textContent, settextContent] = useState("");
  const [langUsed, setlangUsed] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    async function getData() {
      const data = await axios({
        method: "get",
        url: `${backendUrl}${path}`,
      });
      const bufferString = Buffer.from(data.data.text);
      settextContent(bufferString.toString("utf-8"));
      setlangUsed(data.data.metaInfo.lang);
      setDate(data.data.metaInfo.uploadtime);
    }
    if (!textContent) getData();
  });
  return (
    <div className="reader">
      <h1>Shared Text</h1>
      {textContent!=="" ? (
        <Editor code={textContent} langUsed={langUsed} date={date}/>
      ) : (
        <h1>Wait a Little More</h1>
      )}
    </div>
  );
}

export default Reader;
