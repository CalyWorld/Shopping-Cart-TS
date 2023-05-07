import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartPage } from './components/CartPage/CartPage';
import { ContactPage } from './components/ContactPage/ContactPage';
import { HomePage } from './components/Homepage/HomePage';
import { NavPage } from './components/NavPage';
import { ShopPage } from './components/ShopPage/ShopPage';
import { ProductItem } from './components/CartPage/productItem';
import { Footer } from './components/Footer';
import { ShopCollection } from './components/Contexts/shopProductContext';
import { ShopContext } from './components/Contexts/shopProductContext';
import { ProductItemContext } from './components/Contexts/productItemContext';
import { CartItemsContext } from './components/Contexts/cartItemsContext';
import { initialShopProduct } from './components/Contexts/shopProductContext';
import { Header } from './components/Header';
import { CartScoreContext } from './components/Contexts/cartScoreContext';
import { ThemeContext } from './components/Contexts/themeContext';

function App() {

  const [cartScore, setCartScore] = useState<number>(0);
  const [shopProducts, setShopProducts] = useState<ShopCollection[]>([initialShopProduct]);
  const [productItem, setProductItem] = useState<ShopCollection[]>([initialShopProduct]);
  const [cartItems, setCartItems] = useState<ShopCollection[]>([]);
  const [theme, setTheme] = useState<boolean>(false);


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Router>
          <div id='container' className={` flex  flex-col gap-5 ${theme ? "bg-dark-mode-background text-whiteTextColor" : ""}`}>
            <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
              <CartScoreContext.Provider value={{ cartScore, setCartScore }}>
                <Header>
                  <NavPage />
                </Header>
                <ShopContext.Provider value={{ shopProducts, setShopProducts }}>
                  <ProductItemContext.Provider value={{ productItem, setProductItem }}>
                    <Routes>
                      <Route path='/Cart/:id' element={<ProductItem />}></Route>
                      <Route path='/Shop' element={<ShopPage />}></Route>
                      <Route path='/Cart' element={<CartPage />}></Route>
                      <Route path='/Contact' element={<ContactPage />}></Route>
                      <Route path='/' element={<HomePage />}></Route>
                    </Routes>
                  </ProductItemContext.Provider>
                </ShopContext.Provider>
                <Footer />
              </CartScoreContext.Provider>
            </CartItemsContext.Provider>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
