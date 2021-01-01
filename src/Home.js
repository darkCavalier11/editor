import React from "react";
import "./Home.css";
import Editor from "./Editor";
import { useStateValue } from "./StateProvider";
import axios from "axios";

function Home() {
  const [{ lang, text, key }, dispatch] = useStateValue();
  const backendUrl = "http://localhost:7000";
  const sendText = async function (e) {
    e.preventDefault();
    try {
      const data = await axios({
        url: backendUrl,
        method: "POST",
        data: {
          data: text,
          lang: lang,
        },
      });
      dispatch({
        type: "SET_KEY",
        key: data.data.Key,
      });
      const linkEle = document.querySelector(".none");
      linkEle.className = "home__link";
      linkEle.href = `${backendUrl}/${data.data.key}`;
      linkEle.textContent = `${backendUrl}/${data.data.key}`;
    } catch (err) {}
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
          <a href="#" className="none"></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
