import React, { useState, useEffect } from 'react';
import { Box } from 'rebass';
// import Nav from './components/Nav';
import Shop from './pages/Shop';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyCart from './pages/MyCart';
import Consumer from './pages/Consumer-Dashboard';
import Admin from './pages/Admin-Dashboard';
import { BrowserRouter as Router, Route, useHistory, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faSignInAlt, faShoppingCart, faHome, faSignOutAlt, faChalkboardTeacher, faUser, faWarehouse, faChartLine, faChartPie, faDollarSign, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import AllSales from "./pages/AllSales/";
// import Expenses from "./pages/Expenses/";
// import Inventory from "./pages/Inventory/";
// import NetRevenue from "./pages/NetRevenue/";
// import SalesByFranchise from "./pages/SalesByFranchise/";
import ProductPage from './pages/ProductPage';
import WithAuth from './components/WithAuth';
import API from './utils/API';


library.add(faEnvelope, faKey, faSignInAlt, faShoppingCart, faHome, faSignOutAlt, faChalkboardTeacher, faGithub, faUser, faWarehouse, faChartLine, faChartPie, faDollarSign, faMoneyCheck);


function App() {
  const [user, setUser] = useState({ username: '', password: '' })
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    API.logIn()
      .then(results => {
        setUser(results.data)
        setLoaded(true);
      })
      .catch(err => {
        console.log(err)
        setLoaded(true)
      })
  }, [])

  const handleLogout = () => {
    setUser({});
    API.logOut();
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
        <Box
          sx={{
            p: 3
          }}>
          <Header />
        </Box>
        <Box
          sx={{
            flex: '1 1 auto',
            p: 3
          }}>
          <Router>
            {loaded ? (
              <Switch>
                <Route exact path="/" loggedIn={user} component={Shop} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <WithAuth exact path="/shop" component={Shop} />
                <Route exact path="/product" component={ProductPage} />
                <WithAuth exact path="/dashboard" component={Consumer} />
                <WithAuth exact path="/admin" component={Admin} />
                <Route exact path="/cart" component={MyCart} />
              </Switch>) :
              (<h1> Loading... </h1>)
            }
          </Router>
        </Box>
        <Box
          sx={{
            p: 3
          }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
