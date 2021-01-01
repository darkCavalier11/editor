import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Editor from "./Editor";
import Reader from "./Reader";

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
      <Router>
        <Switch>
          <Route path="/nm">
            <Reader></Reader>
          </Route>
          <Route path="/">
              <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
