import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Landing";
import Home from "./components/Home";
import CreateAnActivity from "./components/CreateAnActivity";
import CreateAPJ from "./components/CreateAPJ";
//import Details from "./components/Details";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "./store/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/activities" component={CreateAnActivity} />
          <Route path="/pj" component={CreateAPJ} />
          {/* <Route path="/all/:name" component={Details} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
