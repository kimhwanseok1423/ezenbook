import '../css/style.css';
import '../css/admin.css';

const AdminMenu = () => {
  return (
    <div className='adminpage-wrap container-fluid d-flex'>
      <div className='adminpage-menu column-row'>
        <ul>
          <li>회원 관리</li>
          <li>상품 관리</li>
          <li>리뷰 관리</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
