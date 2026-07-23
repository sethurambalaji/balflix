
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';  
import React from 'react';
import ProductDetail from './pages/ProductDetail';
import BackgroundColor from './context/Style';
import cartDetails from './context/CartDetails';

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const addToCart = (item) => {
    
    const existingItem = cartItems.find((i) => i._id === item._id);
    const cartItem = { 
      _id: item._id,
      name: item.name,
      title: item.title,
      ticketprice: item.ticketprice,
      image: item.image,
    };
    if (!existingItem) {
      cartItem.quantity = 1;
      cartItem.totalPrice = item.ticketprice;
      setCartItems([...cartItems, cartItem]);
      
    }
    else{
      // cartItem.quantity = existingItem.quantity + 1;
      // cartItem.totalPrice = existingItem.totalPrice + item.ticketprice;

      // let index = cartItems.findIndex((i) => i._id === item._id);

      // let oldCartItems = [...cartItems];
      // oldCartItems.splice(index,1,cartItem);

      // setCartItems(oldCartItems);
    }
  }

  const backgroundImages = 'linear-gradient(to right bottom, #95CCDD, #4274D9, #293681)';

  return (
    <BackgroundColor.Provider value={{ backgroundImages }}>
      <cartDetails.Provider value={{ cartItems,setCartItems, addToCart}}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
    </cartDetails.Provider>
    </BackgroundColor.Provider>
  );
}

export default App;
