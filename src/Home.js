import React from "react";
import "./Home.css";
import Editor from "./Editor";
import { useStateValue } from "./StateProvider";
import axios from "axios";

function Home() {
  const [{ lang, text }, dispatch] = useStateValue();
  const backendUrl = "http://localhost:7000";
  const sendText = function (e) {
    e.preventDefault();
    axios({
      url: backendUrl,
      method: "POST",
      data: {
        data: text,
        lang: lang,
      },
    });
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__legend">
          <h1>Paste and share</h1>
          <Editor className="home__editor"></Editor>
          <button className="home__button" onClick={sendText}>
            GET URL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
