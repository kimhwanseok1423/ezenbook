import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './components/Home/Home';
import Admin from './routes/Admin';
import CartPage from './pages/CartPage';
import BookList from './routes/BookList';
import UserList from './routes/UserList';
import Header from './components/Shared/Header';
import MainTemplate from './components/Shared/MainTemplate';
import MultiTemplate from './components/Shared/MultiTemplate';

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/:menu' element={<MainTemplate />} />
        <Route path='/:menu/:id' element={<MultiTemplate />} />
        <Route path='/admin/:id' element={<Admin />} />
        <Route path='/booklist' element={<BookList />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
