import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { CartPage } from './components/CartPage/CartPage';
import { ContactPage } from './components/ContactPage/ContactPage';
import { HomePage } from './components/Homepage/HomePage';
import { NavPage } from './components/NavPage';
import {ShopPage} from './components/ShopPage/ShopPage';
function App() {
  return (
    <div className="App">
      <Router>
          <NavPage/>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='Shop' element={<ShopPage/>}></Route>
            <Route path='Cart' element={<CartPage/>}></Route>
            <Route path='Contact' element={<ContactPage/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
