import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Category from './routes/Category';
import BookDetail from './routes/BookDetail';
import Bestseller from './routes/Bestseller';
import Cart from './routes/Cart';
import Mypage from './routes/Mypage';
import Order from './routes/Order';
import Admin from './routes/Admin';
import Test from './routes/Test';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/bookdetail' element={<BookDetail />} />
        <Route path='/bestseller' element={<Bestseller />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
