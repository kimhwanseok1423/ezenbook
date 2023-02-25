import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/bookdetail.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../components/commonApi/mainApi';
import {
  faArrowRight,
  // faMinus,
  // faPlus,
  // faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRate from '../components/Shared/StarRate';
// import { Rating } from '@mui/material';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [count, setCount] = useState(1);

  const bPrice = (book.book_price * 1).toLocaleString('ko-KR');
  const bDiscountedPrice = (book.book_price * 0.9).toLocaleString('ko-KR');
  const sumPrice = (book.book_price * 0.9 * count).toLocaleString('ko-KR');

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleQuantity = (type) => {
    if (type === 'plus') {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    await axios.get(baseUrl + '/booklist').then((response) => {
      setBook(response.data.find((book) => book.book_num === parseInt(id)));
    });
  };

  return (
    <div className='book-detail-wrap container-fluid'>
      <div className='book-detail-body colums-row'>
        <div className='book-title-name'>
          <p>{book.book_title}</p>
          <hr />
        </div>
        <div className='book-detail d-flex mt-4'>
          <div className='book-detail-img col-4'>
            <img src={book.book_image} alt='book' />
          </div>
          <div className='book-detail-right col-8 colum-row'>
            <div className='row'>
              <div className='book-detail-info colums-row col-8'>
                <div className='container d-flex justify-content-between p-0 '>
                  <div className='book-author col-8'>
                    <p>{book.book_author}</p>
                  </div>
                  <div className='rating columns-row'>
                    <div className='stars'>
                      <StarRate />
                      {/* <Rating
                        name='book-rating'
                        value={book.book_rating}
                        readOnly
                      /> */}
                    </div>
                    <div className='shipping mt-2'>
                      <p>택배배송 / 무료배송</p>
                    </div>
                  </div>
                </div>
                <div className='container d-flex justify-content-between p-0 '>
                  <div className='book-publisher'>
                    <p>{book.book_publisher}</p>
                  </div>
                </div>
                <p id='book-publishing-date'>
                  발간일: &nbsp;
                  {book.book_pubdate}
                </p>
                <div className='row'>
                  <div className='book-price d-flex mt-4'>
                    <p id='book-original-price'>{bPrice}원</p>
                    <p id='arrow'>
                      &nbsp;
                      <FontAwesomeIcon icon={faArrowRight} />
                      &nbsp;
                    </p>
                    <p id='book-discounted-price'>{bDiscountedPrice}원</p>
                    <p id='book-discounted-percent'>(10%) 할인</p>
                  </div>

                  <div className='book-ranking'>
                    <p>소설 #1 / 태그 #2 등등 랭킹자리</p>
                  </div>
                </div>
              </div>

              <div className='col-4'>
                <div
                  className='cart-sum card conainer colums-row  mt-1'
                  id='cart-sum'
                >
                  <div className='cart-sum-wrap'>
                    <div
                      className='
                order-info'
                    >
                      <div className='cart-sum-price d-flex'>
                        <p className='title'>상품금액 : </p>
                        <p className='price'>{sumPrice} 원</p>
                      </div>
                      <div className='cart-sum-shipping d-flex'>
                        <p className='title'>배 송 비 : </p>
                        <p className='price'> 0 원 </p>
                      </div>
                      <hr />
                      <div className='cart-total-price d-flex'>
                        <p className='title'>결제금액 : </p>
                        <p className='price'>{sumPrice} 원 </p>
                      </div>
                      <div className='cart-order'>
                        <div className='book-cart-body d-flex justify-content-between'>
                          <a href='/cart'>
                            <button
                              className='btn btn-secondary btn-bookdetial-cart'
                              id={'bookcart-' + book.book_num}
                            >
                              장바구니
                            </button>
                          </a>

                          <a href='#'>
                            <button
                              className='btn btn-bookdetial-cart btn-search '
                              id={'bookorder-' + book.book_num}
                            >
                              바로구매
                            </button>
                          </a>
                        </div>
                        {/* <button className='btn btn-search btn-cart-order'>
                            주문하기
                          </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='book-content card'>
              <p div className='book-content-description'>
                책 소개
              </p>
              <div className='book-description'>{book.book_desc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetailPage;
