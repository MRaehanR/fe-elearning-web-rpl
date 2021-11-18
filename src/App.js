import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar/Navbar";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Home from "./containers/Home/Home";
import { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");

  const handleUser = (user) => {
    setUser(user);
  };

  axios.get("/users").then(
    (res) => {
      handleUser(localStorage.getItem("user"));
    },
    (err) => {
      console.log(err);
    }
  );

  return (
    <div className="App">
      <NavbarComp user={user} setUser={handleUser} />
      <div className="inner">
        <Switch>
          <Route path="/" exact>
            {() => <Home user={user} />}
          </Route>
          <Route path="/login">{() => <Login setUser={handleUser} />}</Route>
          <Route path="/register">
            {() => <Register setUser={handleUser} />}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
