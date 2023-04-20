import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartPage } from './components/CartPage/CartPage';
import { ContactPage } from './components/ContactPage/ContactPage';
import { HomePage } from './components/Homepage/HomePage';
import { NavPage } from './components/NavPage';
import { ShopPage } from './components/ShopPage/ShopPage';
import { CartItem } from './components/CartPage/CartItem';
import { Footer } from './components/Footer';
import { useFetch } from './components/useFetch';

export interface ShopCollection {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: string,
    count: number
  }
}

interface ShopContextType {
  shopProducts: ShopCollection,
  setShopProducts: React.Dispatch<React.SetStateAction<ShopCollection>>;
}

export const ShopContext = createContext<ShopContextType>({
  shopProducts: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: 0
    }
  },
  setShopProducts: () => { }
});



function App() {

  // const [cartTotal, setCartTotal] = useState(0);

  const [shopProducts, setShopProducts] = useState<ShopCollection>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: 0
    }
  });

  // const [cartItem, setCartItem] = useState([]);

  // const [theme, setTheme] = useState();

  let url: string = "https://fakestoreapi.com/products/"

  useFetch(url, setShopProducts);

  console.log(shopProducts);

  const shopStateValue = { shopProducts, setShopProducts }

  return (
    <div className="App">
      <Router>
        <div id='container'>
          {/* <ThemeContext.Provider value={theme}>
            <CartTotalContext.Provider value={cartTotal}> */}
          <NavPage />
          <ShopContext.Provider value={shopStateValue}>
            {/* <CartItemContext.Provider value={cartItem}> */}
            <Routes>
              <Route path='/Cart:id' element={<CartItem />}></Route>
              <Route path='/Shop' element={<ShopPage />}></Route>
              <Route path='/Cart' element={<CartPage />}></Route>
              <Route path='/Contact' element={<ContactPage />}></Route>
              <Route path='/' element={<HomePage />}></Route>
            </Routes>
            {/* </CartItemContext.Provider> */}
          </ShopContext.Provider>
          <Footer />
          {/* </CartTotalContext.Provider>
          </ThemeContext.Provider> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
