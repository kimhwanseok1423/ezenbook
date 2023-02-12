import '../css/category.css';
import '../css/style.css';
import '../css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import StarRate from '../pages/StarRate';
const CategoryRight = () => {
  return (
    <div className='categoryRight col-xl-12 col-lg-12 container-fluid'>
      <div className='book-list-body colums-row mt-1'>
        {
          //////// 반복리스트
        }
        <div className='book-list-item d-flex'>
          <div className='book-img'>
            <a href='#'>
              <img src='../test/test1.jpg'></img>
            </a>
          </div>
          <div className='book-details colums-row'>
            <div className='book-title d-flex mt-2'>
              <p id='book-title-name'>세이노의 가르침</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-detail-category'>자기계발</p>
            </div>
            <div className='book-writer d-flex'>
              <p id='book-writer-name'>세이노</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publisher'>데이원</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publishing-date'>2023년 3월</p>
            </div>
            <div className='book-price d-flex mt-4'>
              <p id='book-original-price'>7,200원</p>
              <p>
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
                &nbsp;
              </p>
              <p id='book-discounted-price'>6,480원</p>
              <p id='book-discounted-percent'>&nbsp;(10%)</p>
            </div>
            <div className='rating'>
              <StarRate />
            </div>
          </div>
        </div>
        {
          //////// 반복리스트
        }
      </div>
    </div>
  );
};
export default CategoryRight;
