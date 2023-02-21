import '../../css/bootstrap.min.css';
import '../../css/style.css';
import '../../css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Categories from '../../pages/Categories';

const Header = () => {
  return (
    <div className='main-menu'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-2 col-lg-2 mt-4 mb-4'>
            <div className='header__logo'>
              <Link to='/'>
                <img src='../img/MainLogo.png' alt='Main Logos' />
              </Link>
            </div>
          </div>
          <div className='container colums-row col-xl-8 col-lg-8'>
            <div className='row'>
              <nav className='header__menu'>
                <ul>
                  <li className='active'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/category'>카테고리</Link>
                    <ul className='dropdown'>
                      <Categories />
                    </ul>
                  </li>
                  <li>
                    <Link to='/bestseller'>베스트셀러</Link>
                  </li>
                  <li>
                    <Link to='/ranking20'>랭킹#20</Link>
                  </li>
                  <li>
                    <Link to='/newest'>신간</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='row'>
              <div className='search__right col-xl-9 col-lg-7'>
                <div className='input-group'>
                  <div className='form-outline'>
                    <input
                      type='search'
                      id='main-search'
                      className='form-control'
                    />
                    <label className='form-label' htmlFor='main-search'></label>
                  </div>
                  <button type='button' className='btn btn-search'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-2 col-lg-2 container colums-row'>
            <div className='header__right'>
              <div className='header__right__auth mt-2'>
                <Link to='#'>Login</Link>/ &nbsp;&nbsp;
                <Link to='#'>SignUp</Link>
              </div>

              <div className='row'>
                <div className='header__right__widget container d-flex justify-content-end mt-4'>
                  {/*  운영자 메뉴, 운영자만 접근 가능 */}
                  <div className='fontawsome' id='fascrewdriverwrench'>
                    <Link to='/admin'>
                      <FontAwesomeIcon icon={faScrewdriverWrench} size='3x' />
                    </Link>
                  </div>

                  <div className='fontawsome' id='fauser'>
                    <Link to='/mypage'>
                      <FontAwesomeIcon icon={faUser} size='3x' />
                    </Link>
                  </div>
                  <div className='fontawsome' id='facartshopping'>
                    <Link to='/cart'>
                      <FontAwesomeIcon icon={faCartShopping} size='3x' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
