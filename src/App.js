import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Editor from "./Editor";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: "CHANGE_LANG",
      lang: "Text",
    });
    return () => {};
  }, []);
  return (
    <div className="app">
      <Editor></Editor>
    </div>
  );
}

export default App;
