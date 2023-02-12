import '../css/style.css';
import '../css/category.css';
import MainMenu from '../pages/MainMenu';
import Categories from '../pages/Categories';
import CategoryRight from '../pages/CategoryRight';

const Category = () => {
  return (
    <div className='container-body'>
      <MainMenu />
      <Categories />
      <CategoryRight />
    </div>
  );
};

export default Category;
