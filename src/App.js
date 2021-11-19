import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar/Navbar";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState();

  const handleUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    axios.get("/users").then(
      (res) => {
        console.log(res.data);
        handleUser(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className="App">
      <NavbarComp user={user} setUser={handleUser} />
      <div className="inner">
        <Switch>
          <Route path="/login">
            {() => <Login setUser={handleUser} user={user} />}
          </Route>
          <Route path="/register">
            {() => <Register setUser={handleUser} />}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
