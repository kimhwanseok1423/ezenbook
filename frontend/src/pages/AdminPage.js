import '../css/admin.css';

const AdminPage = () => {
  return (
    <div className='adminpage-wrap container-fluid d-flex'>
      <div className='adminpage-menu col-xl-2 col-lg-2 column-row'>
        <div className='admin-menu-listcolumn-row'>
          <ul>
            <li>회원 관리</li>
            <li>상품 관리</li>
            <li>리뷰 관리</li>
          </ul>
        </div>
      </div>
      <div className='adminpage-body col-xl-10 col-lg-10'>
        <p>Admin Page Body</p>
      </div>
    </div>
  );
};

export default AdminPage;
