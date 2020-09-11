import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/home";
import CartPage from "./pages/cartPage/cart";
import ContactPage from "./pages/contactPage/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
