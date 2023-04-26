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
import { useFetch } from './components/useFetch';
import { ShopCollection } from './components/Contexts/shopProductContext';
import { ShopContext } from './components/Contexts/shopProductContext';
import { ProductItemContext } from './components/Contexts/productItemContext';
import { CartItemsContext } from './components/Contexts/cartItemsContext';
import { initialShopProduct } from './components/Contexts/shopProductContext';
import { Header } from './components/Header';

function App() {

  // const [cartTotal, setCartTotal] = useState(0);
  const [shopProducts, setShopProducts] = useState<ShopCollection[]>([initialShopProduct]);
  const [productItem, setProductItem] = useState<ShopCollection[]>([initialShopProduct]);
  const [cartItems, setCartItems] = useState<ShopCollection[]>([]);


  // const [theme, setTheme] = useState();

  let url: string = "https://fakestoreapi.com/products/"

  //make an api call and add the data into shopProducts
  useFetch(url, setShopProducts);

  // console.log(shopProducts);
  console.log("product-items", productItem);
  console.log("cart-items",cartItems);


  return (
    <div className="App">
      <Router>
        <div id='container'>
          {/* <ThemeContext.Provider value={theme}> */}
            <CartItemsContext.Provider value={{cartItems, setCartItems}}>
          <Header>
            <NavPage />
          </Header>
          <ShopContext.Provider value={{ shopProducts, setShopProducts }}>
              <ProductItemContext.Provider value={{ productItem, setProductItem }}>
                <Routes>
                  <Route path='/Cart/:id' element={<ProductItem/>}></Route>
                  <Route path='/Shop' element={<ShopPage />}></Route>
                  <Route path='/Cart' element={<CartPage />}></Route>
                  <Route path='/Contact' element={<ContactPage />}></Route>
                  <Route path='/' element={<HomePage />}></Route>
                </Routes>
              </ProductItemContext.Provider>
          </ShopContext.Provider>
          <Footer />
          </CartItemsContext.Provider>
          {/* </ThemeContext.Provider> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
