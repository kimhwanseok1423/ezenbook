import AdminMenu from '../pages/AdminMenu';
import MainMenu from '../pages/MainMenu';
import UserPage from '../pages/UserPage';

const Admin = () => {
  return (
    <>
      <MainMenu />
      <div className='container d-flex'>
        <div className='col-2'>
          <AdminMenu />
        </div>
        <div className='col-10'>
          <UserPage />
        </div>
      </div>
    </>
  );
};

export default Admin;
