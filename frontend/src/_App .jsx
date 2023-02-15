import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './components/commonApi/mainApi';
import Home from './routes/Home';
import Category from './routes/Category';
import BookDetail from './routes/BookDetail';
import Bestseller from './routes/Bestseller';
import Cart from './routes/Cart';
import Mypage from './routes/Mypage';
import Order from './routes/Order';
import Admin from './routes/Admin';
import Admin1 from './routes/Admin1';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/bookdetail' element={<BookDetail />} />
        <Route path='/bestseller' element={<Bestseller />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin1' element={<Admin1 />} />
      </Routes>
    </div>
  );
};

export default App;
