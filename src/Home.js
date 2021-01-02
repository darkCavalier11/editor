import React from "react";
import "./Home.css";
import Editor from "./Editor";
import { useStateValue } from "./StateProvider";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [{ lang, text, key }, dispatch] = useStateValue();
  const backendUrl = "https://paste-up.herokuapp.com/";
  const sendText = async function (e) {
    e.preventDefault();
    history.push("/loading");
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
      history.push(`${data.data.key}`);
    } catch (err) {}
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__legend">
          <h1>Paste and share</h1>
          <Editor langUsed={lang} className="home__editor"></Editor>
          <button className="home__button" onClick={sendText}>
            GET URL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
