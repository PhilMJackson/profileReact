import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { About, Navbar, Home, Footer, Projects } from "./index.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
