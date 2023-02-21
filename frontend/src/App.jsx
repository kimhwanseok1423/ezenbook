import './App.css';
import { Route, Router, Routes, useLocation } from 'react-router-dom';

import Home from './components/Home/Home';
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
import CategoryList from './pages/CategoryList';
import Header from './components/Shared/Header';
import CategoryPage from './pages/CategoryPage';

function App() {
  const location = useLocation();
  const locationPathname = location.pathname;
  console.log(locationPathname);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path='/' element={<Home />} />

        <Route path='/category/' element={<Category />} />

        <Route path='/category/:id' component={<CategoryList />} />

        <Route path='/bestseller' element={<Bestseller />} />
      </Routes>
    </div>
  );
}

export default App;
