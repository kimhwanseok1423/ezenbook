import '../css/style.css';
import '../css/category.css';
import MainMenu from '../pages/_MainMenu';
import Categories from '../pages/Categories';
import CategoryListRight from '../pages/CategoryListRight';
import { Route, Routes } from 'react-router-dom';

const CategoryList = (e) => {
  return (
    <div className='category-body'>
      <MainMenu />
      <div className='container-fluid d-flex'>
        <div className='col-xl-2 col-lg-2 mt-2'>
          <Categories />
        </div>
        <div className='col-xl-10 col-lg-10'>
          <Routes>
            <Route
              path='categoryListRight/:locationPathname/*'
              element={<CategoryListRight />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
