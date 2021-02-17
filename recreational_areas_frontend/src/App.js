import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import HomeContainer from "./components/HomeContainer";
import UserSignUp from "./components/user/UserSignUp";
import UserLogIn from "./components/user/UserLogIn";
import About from "./components/About";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
         <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/signup" component={UserSignUp} />
          <Route exact path="/login" component={UserLogIn} />
          <Route exact path="/about" component={About} />
          {/* <Route path="/contact" compoent={} /> */}

         </Switch>
      </Router>
    </div>
  );
}

export default App;