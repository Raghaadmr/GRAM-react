import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// Components
import ProductsList from "./Components/ProductsList";
import ProductDetail from "./Components/ProductDetail";
import OrderList from "./Components/OrderList";
import OrderDetail from "./Components/OrderDetail";

function App() {
  console.log("app")

  return (
    <div >
      {/* <ProductDetail /> */}
      {/* <ProductsList />  */}
      {/* <BrowserRouter> */}

      <Switch>
        <Route path="/detail/:productID">
          <ProductDetail />
        </Route>
        <Route path="/list/">
          <ProductsList />
        </Route>
        <Route path="/orders/:orderID">
          <OrderDetail />
        </Route>
        <Route path="/orders/">
          <OrderList />
        </Route>
      </Switch>
      {/* </BrowserRouter>   */}
    </div>
  );
}

export default App;
