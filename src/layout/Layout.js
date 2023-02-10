import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Layout = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Footer />
    </div>
  );
};

export default Layout;
