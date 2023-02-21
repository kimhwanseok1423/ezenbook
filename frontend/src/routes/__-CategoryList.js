import Header from '../components/Shared/Header';
import Nav from '../components/Shared/Nav';
import CategoryPage from '../pages/CategoryPage';

const Category = () => {
  console.log('Category list loaded');
  return (
    <div className='container-fluid d-flex'>
      <div className='col-xl-2 col-lg-2'>
        <Nav />
      </div>
      <div className='col-xl-10 col-lg-10'>
        <CategoryPage />
      </div>
    </div>
  );
};

export default Category;
