import Nav from './Nav';

const MainLayout = ({ children }) => {
  return (
    <div className='container-fluid d-flex'>
      <div className='col-xl-2 col-lg-2'>
        <Nav />
      </div>
      <div className='col-xl-10 col-lg-10'>{children}</div>
    </div>
  );
};

export default MainLayout;
