import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseUrl } from './components/commonApi/mainApi.js';
import axios from 'axios';
import Home from './routes/Home';
import Category from './routes/Category';
import BookDetail from './routes/BookDetail';
import Bestseller from './routes/Bestseller';
import Cart from './routes/Cart';
import Mypage from './routes/Mypage';
import Order from './routes/Order';
import Admin from './routes/Admin';
import Admin1 from './routes/Admin1';
import BookList from './routes/BookList';
import UserList from './routes/UserList';

const App = () => {
  const [book, setBook] = useState([]);
  const [user, setUser] = useState([]);
  const convertPrice = (book_price) => {
    return book_price.toString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    await axios
      .get(baseUrl + '/booklist')
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('setbook added');
  }

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
        <Route path='/booklist' element={<BookList />} />
        <Route
          path='/userlist'
          element={<UserList user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
};

export default App;
