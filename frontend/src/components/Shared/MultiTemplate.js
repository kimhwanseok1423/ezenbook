import Bestseller from '../../routes/Bestseller';
import Category from '../../routes/Category';
import Newest from '../../routes/Newest';
import Admin from '../../routes/Admin';
import DefaultPage from '../../pages/DefaultPage';
import { useParams } from 'react-router-dom';

const MultiTemplate = () => {
  const { menu, id } = useParams();

  const getContainer = (menu) => {
    switch (menu) {
      case 'category':
        return <Category menu={menu} id={id} />;
      case 'newest':
        return <Newest menu={menu} id={id} />;
      case 'bestseller':
        return <Bestseller menu={menu} id={id} />;
      case 'admin':
        return <Admin />;
      default:
        return <DefaultPage />;
    }
  };
  return <>{getContainer(menu)}</>;
};

export default MultiTemplate;
