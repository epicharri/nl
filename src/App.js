import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import Home from './components/Home'
import SalesInvoices from './components/SalesInvoices'
import PurchaseInvoices from './components/PurchaseInvoices'

const App = () => {

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">Koti</Link>
        <Link style={padding} to="/salesinvoices">Myyntilaskut</Link>
        <Link style={padding} to="/purchaseinvoices">Ostolaskut</Link>
      </div>

      <Switch>
        <Route path="/salesinvoices">
          <SalesInvoices />
        </Route>
        <Route path="/purchaseinvoices">
          <PurchaseInvoices />
        </Route>
        <Route path="/">
          <Home />
        </Route>        
      </Switch>

      <div>
        <i>Nettilasku</i>
      </div>
    </Router>



  )




}


export default App;
