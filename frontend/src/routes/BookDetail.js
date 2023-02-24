import '../css/style.css';
import '../css/category.css';
import Categories from '../pages/Categories';
import BookDetailPage from '../pages/BookDetailPage';
import Review from '../pages/Review';
import { useParams } from 'react-router-dom';
import ReviewList from '../pages/Review_list';

const BookDetail = (props) => {
  const menu = props.name;
  const { id } = useParams();

  return (
    <div className='container-fluid d-flex'>
      <div className='col-xl-2 col-lg-2 mt-2'>
        <Categories name={menu} />
      </div>
      <div className='col-xl-10 col-lg-10 mt-3 comlum-row'>
        <div className='book-detail-wrap'>
          <BookDetailPage menu={menu} id={id} />
        </div>
        <div className='review-wrap mt-4'>
          <Review id={`${id}`} />
        </div>
        {/* <ReviewList id={`${id}`} /> */}
      </div>
    </div>
  );
};

export default BookDetail;
