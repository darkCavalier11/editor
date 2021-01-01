import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

// reducer
import { useStateValue } from "./StateProvider";

// Themes

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";
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
import "codemirror/addon/edit/closetag";
import "./Editor.css";
import EditorHeader from "./EditorHeader";
function Editor({ code, langUsed, date = new Date().toDateString() }) {
  let textContent = "";
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
  const [{ lang, text }, dispatch] = useStateValue();
  return (
    <div className="editor">
      <EditorHeader defaultLang={langUsed} date={date}></EditorHeader>
      <CodeMirror
        className="editor__codemirror"
        value={code}
        options={{
          mode: langMap[langUsed],
          theme: "material-darker",
          lineNumbers: true,
          matchTags: true,
          smartIndent: true,
          dragDrop: true,
          autoCloseTags: true,
          lineWrapping: true,
          lineWiseCopyCut: true,
          autoCloseBrackets: true,
          lint: true,
          indentUnit: 4,
        }}
        onChange={(editor, data, value) => {
          dispatch({
            type: "CHANGE_TEXT_CONTENT",
            text: value,
          });
        }}
      ></CodeMirror>
    </div>
  );
}

export default Editor;
