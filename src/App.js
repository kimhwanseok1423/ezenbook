import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Category from './routes/Category';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </div>
  );
};

export default App;
