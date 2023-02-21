import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Home from './routes/Home';
import Category from './routes/Category';
import BookDetail from './routes/BookDetail';
import Bestseller from './routes/Bestseller';
import Cart from './routes/Cart';
import Mypage from './routes/Mypage';
import Order from './routes/Order';
import Admin from './routes/Admin';
import BookList from './routes/BookList';
import UserList from './routes/UserList';
import Newest from './routes/Newest';
import CategoryList from './routes/CategoryList';

function App() {
  const location = useLocation();
  const locationPathname = location.pathname;
  console.log(locationPathname);

  return (
    <div className='App'>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path='categorylist/:locationPathname/*'
          element={<CategoryList />}
        />
        <Route path='/category' element={<Category />} />
        <Route path='/bookdetail' element={<BookDetail />} />
        <Route path='/bestseller' element={<Bestseller />} />
        <Route path='/newest' element={<Newest />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/booklist' element={<BookList />} />
        <Route path='/userlist' element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
