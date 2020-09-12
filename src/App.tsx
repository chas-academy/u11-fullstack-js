import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/home";
import CartPage from "./pages/cartPage/cart";
import ContactPage from "./pages/contactPage/contact";
import DashboardPage from "./pages/dashboardPage/dashboard";
import OrderConfirmationPage from "./pages/orderConfirmationPage/orderConfirmation";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/orderConfirmation" component={OrderConfirmationPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
