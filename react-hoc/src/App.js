import React from 'react';
import logo from './logo.svg';
import LoginStatus from './LoginStatus'
import ExampleMobx from './exampleMobx/index'
import examplebase from './examplebase/index'
import ExampleDeBounce from  './ExampleDeBounce/index'
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
      <ExampleMobx />
      <LoginStatus />
      <ShopCart />
      <ExampleDeBounce />
    </>


  )
}

export default App;
