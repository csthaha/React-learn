import React from 'react';
import logo from './logo.svg';
import LoginStatus from './LoginStatus'
import ShopCart from './ShopCart'
import WithLogin from "./WithLogin";
import './App.css';
import withLogin from './WithLogin';

// const WithLoginStatus = WithLogin(LoginStatus)
// const WithShopCart = withLogin(ShopCart)

function App() {
  return (
    // <React.Fragment>
    //     <LoginStatus />
    //     <ShopCart />  
    // </React.Fragment>
    <>
      {/* <WithLoginStatus />
      <WithShopCart /> */}

      <LoginStatus />
      <ShopCart />
    </>


  )
}

export default App;
