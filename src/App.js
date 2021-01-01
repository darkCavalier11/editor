import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reader from "./Reader";
import Loading from "./Loading";

function App() {
  const [{ lang, text, key }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/loading">
            <Loading></Loading>
          </Route>
          <Route path="/:params">
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
