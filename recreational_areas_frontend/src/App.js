import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import UserSignUp from "./components/user/UserSignUp";
import UserLogIn from "./components/user/UserLogIn";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
         <Switch>
          <Route path="/signup" component={UserSignUp} />
          <Route path="/login" component={UserLogIn} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
