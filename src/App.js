import './App.css';
import { Route, Routes } from 'react-router-dom';
import BestSeller from './pages/BestSeller';
import Categories from './pages/Categories';
import Layout from './layout/Layout';
import MainMenu from './routes/MainMenu';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<MainMenu />} />
        <Route path='bestseller' element={<BestSeller />} />
        <Route path='categories' element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
