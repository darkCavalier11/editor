import React from "react";
import "./Home.css";
import Typed from "react-typed";
import Editor from "./Editor";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__legend">
          <h1>
            {" "}
            An Editor for{" "}
            <Typed
              className="home__typed"
              strings={[
                "C/C++",
                "Python",
                "JavaScript",
                "Go",
                "Rust",
                "Java",
                "HTML",
                "CSS",
                "XML",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop={Infinity}
              cursorChar=""
            ></Typed>
          </h1>
          <Editor className="home__editor"></Editor>
        </div>
      </div>
    </div>
  );
}

export default Home;
