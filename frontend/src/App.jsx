import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './components/Home/Home';
import CartPage from './pages/CartPage';
import BookList from './routes/BookList';
import UserList from './routes/UserList';
import Header from './components/Shared/Header';
import MainTemplate from './components/Shared/MainTemplate';
import MultiTemplate from './components/Shared/MultiTemplate';
import BookDetail from './routes/BookDetail';

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/:menu/:id' element={<MultiTemplate />} />
        <Route path='/:menu' element={<MainTemplate />} />
        <Route path='/book/:id' element={<BookDetail name='category' />} />
        <Route path='/admin/booklist' element={<BookList />} />
        <Route path='/admin/userlist' element={<UserList />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
