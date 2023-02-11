import { NavLink } from 'react-router-dom';
import MainMenu from '../routes/MainMenu';
import MainPage from '../routes/MainPage';

const Layout = () => {
  return (
    <div>
      <MainMenu />
      <MainPage />
    </div>
  );
};

export default Layout;
