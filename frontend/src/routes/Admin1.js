import AdminMenu from '../pages/AdminMenu';
import MainMenu from '../pages/MainMenu';
import UserPage1 from '../pages/UserPage1';

const Admin1 = () => {
  return (
    <>
      <MainMenu />
      <div className='container-fluid d-flex'>
        <div className='col-2'>
          <AdminMenu />
        </div>
        <div className='col-10'>
          <UserPage1 />
        </div>
      </div>
    </>
  );
};

export default Admin1;
