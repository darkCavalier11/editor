import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Editor from "./Editor";
import Home from "./Home";
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
      <Home></Home>
    </div>
  );
}

export default App;
