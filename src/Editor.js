import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

// Themes

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

// Language Supports

import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/rust/rust";
import "codemirror/mode/go/go";

// Addons
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/matchtags";

import "./Editor.css";
function Editor() {
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
  const langMap = {
    "C/C++": "text/x-c++src",
    Java: "text/x-java",
    Python: "python",
    JavaScript: "javascript",
    HTML: "htmlmixed",
    CSS: "css",
    XML: "xml",
    Go: "go",
    Rust: "rust",
    Text: "",
  };

  return (
    <div className="editor">
      <header className="editor__header">
        <select className="editor__dropdown">
          {langSupport.map((option) => (
            <option selected>{option}</option>
          ))}
        </select>
      </header>
      <CodeMirror
        className="editor__codemirror"
        value="#include <bits/stdc++.h>"
        options={{
          mode: "",
          theme: "material",
          autoCloseBrackets: true,
          matchBrackets: true,
          lineNumbers: true,
          matchTags: true,
          smartIndent: true,
          dragDrop: true,
        }}
        onChange={(editor, data, value) => {}}
      ></CodeMirror>
    </div>
  );
}

export default Editor;
