import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import HomeContainer from "./components/HomeContainer";
import UserSignUp from "./components/user/UserSignUp";
import UserLogIn from "./components/user/UserLogIn";
import About from "./components/About";
import Contact from "./components/Contact";
import InvalidPath from "./components/InvalidPath";
import background from "./images/mountain.jpeg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Router>

        <NavBar />

         <Switch>

          <Route path="/signup" component={UserSignUp} />
          <Route path="/login" component={UserLogIn} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={HomeContainer} />

          <Route>
            <InvalidPath />
          </Route>

         </Switch>
         
      </Router>
    </div>
  );
}

export default App;