import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// Components
import ProductsList from "./Components/ProductsList";
import ProductDetail from "./Components/ProductDetail";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
function App() {
  console.log("app");

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/detail/:productID">
          <ProductDetail />
        </Route>
        <Route path="/list/">
          <ProductsList />
        </Route>
        <Redirect exact from="/logout" to="/login" />
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
