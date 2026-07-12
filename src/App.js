
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';  
import ProductDetail from './pages/ProductDetail';
import BackgroundColor from './context/Style';

function App() {
  const backgroundImages = 'linear-gradient(to right, #95CCDD, #4274D9, #293681)';
  return (
    <BackgroundColor.Provider value={{ backgroundImages }}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
    </BackgroundColor.Provider>
  );
}

export default App;
