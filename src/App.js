import React from "react";
import{ BrowserRouter ,Switch, Route, Redirect} from 'react-router-dom';
// Components
import ProductsList from "./Components/ProductsList";
import ProductDetail from "./Components/ProductDetail";

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
          </Switch>
        {/* </BrowserRouter>   */}
    </div>
  );
}

export default App;
