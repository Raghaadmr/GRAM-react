import React from "react";
import{ BrowserRouter ,Switch, Route, Redirect} from 'react-router-dom';
// Components
import ProductsList from "./Components/ProductsList";
import ProductDetail from "./Components/ProductDetail";
import Profile from "./Components/Profile"

function App() {
  console.log("app")

  return (
    <div >
       {/* <ProductDetail /> */}
       {/* <ProductsList />  */}
         {/* <Profile/> */}
     
     <Switch>
      <Route path="/products/:productID">
            <ProductDetail />
          </Route>  
          <Route path="/products/">  
            <ProductsList />
          </Route> 
          <Route path="/profile">
            <Profile/>
            </Route>    
          </Switch>
       
    </div>
  );
}

export default App;
