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
import "codemirror/addon/scroll/simplescrollbars";
import "codemirror/addon/edit/closetag";
import "./Editor.css";
import EditorHeader from "./EditorHeader";
function Editor({code, langUsed, date = new Date().toDateString()}) {
  
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
      <EditorHeader lang={langUsed|lang} date={date}></EditorHeader>
      <CodeMirror
        className="editor__codemirror"
        value={code||text}
        options={{
          mode: langMap[langUsed||lang],
          theme: "material-darker",
          autoCloseBrackets: true,
          matchBrackets: true,
          lineNumbers: true,
          matchTags: true,
          smartIndent: true,
          dragDrop: true,
          autoCloseTags: true,
          lineWrapping: true,
          lineWiseCopyCut: true,
          lint: true,
          indentUnit: 4,
        }}
        onChange={(editor, data, value)=>{
          dispatch({
            type: "CHANGE_TEXT_CONTENT",
            code: value,
          })
        }}
      ></CodeMirror>
      
    </div>
  );
}

export default Editor;
