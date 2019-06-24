import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Layout from './page/Layout'
// function Table() {
//   return(
//     <div>这里是Table页面</div>
//   )
// }
// function Label() {
//   return(
//     <div>欢迎来到Label页面</div>
//   )
// }
function App() {
  return (
    <Router>
      <Route path="/" component={Layout}></Route>
    </Router>
  )
}

export default App;
