import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

import HomePage from './pages/homePage/home';
import CartPage from './pages/cartPage/cart';
import ContactPage from './pages/contactPage/contact';
import DashboardPage from './pages/dashboardPage/dashboard';
import OrderConfirmationPage from './pages/orderConfirmationPage/orderConfirmation';
import SignUpPage from './pages/signUpPage/signUp';
import LoginPage from './pages/loginPage/login';

const client = new ApolloClient({
  uri: 'http://fierce-inlet-69818.herokuapp.com/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signUp" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/orderConfirmation" component={OrderConfirmationPage} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
