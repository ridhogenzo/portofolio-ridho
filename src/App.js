import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Beachcation from "pages/Beachcation";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/Beachcation" component={Beachcation}></Route>
      </Router>
    </div>
  );
}

export default App;
