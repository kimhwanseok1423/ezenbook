import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
