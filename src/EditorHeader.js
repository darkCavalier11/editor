import React from "react";
import { useStateValue } from "./StateProvider";
import "./EditorHeader.css";
function EditorHeader({
  defaultLang = "Text",
  date = new Date().toDateString(),
}) {
  const [{ lang, text }, dispatch] = useStateValue();
  const langChange = function (e) {
    e.preventDefault();
    dispatch({
      type: "CHANGE_LANG",
      lang: e.target.value,
    });
  };
  const langSupport = [
    "C/C++",
    "Python",
    "JavaScript",
    "Java",
    "HTML",
    "CSS",
    "XML",
    "Go",
    "Rust",
    "Text",
  ];
  return (
    <div className="eheader">
      <select className="eheader__dropdown" onChange={langChange}>
        {langSupport.map((option) => (
          <option selected="selected">{option}</option>
        ))}
      </select>
      <p className="eheader__date">{date}</p>
    </div>
  );
}

export default EditorHeader;
