import Categories from '../pages/Categories';

import NewestRight from '../pages/NewestRight.js';

const Newest = () => {
  return (
    <div className='container-fluid d-flex'>
      <div className='col-xl-2 col-lg-2'>
        <Categories />
      </div>
      <div className='col-xl-10 col-lg-10'>
        <NewestRight />
      </div>
    </div>
  );
};

export default Newest;
