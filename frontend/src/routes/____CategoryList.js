import Nav from '../components/Shared/Nav';
import CategoryListPage from '../pages/CategoryPage';

const { params } = this.props.match;

const CategoryList = (params) => {
  return (
    <div className='container-fluid d-flex'>
      <div className='col-xl-2 col-lg-2'>
        <Nav />
      </div>
      <div className='col-xl-10 col-lg-10'>
        <CategoryListPage />
      </div>
    </div>
  );
};

export default CategoryList;
