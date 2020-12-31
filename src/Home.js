import React from "react";
import "./Home.css";
import Editor from "./Editor";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__legend">
          <h1>
            Paste and share
          </h1>
          <Editor className="home__editor"></Editor>
          <button>Get Url</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
