import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Category from './routes/Category';
import BookDetail from './routes/BookDetail';
import Bestseller from './routes/Bestseller';
import Cart from './routes/Cart';
import Mypage from './routes/Mypage';

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
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
    </div>
  );
};

export default App;
