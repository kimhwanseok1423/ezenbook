import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/carousel.css';
import React, { useEffect, useState } from 'react';
import Carousel from 'better-react-carousel';
import axios from 'axios';
import { baseUrl } from '../components/commonApi/mainApi';

const NewestSmall = () => {
  const [book, setbook] = useState([]);
  const addr = baseUrl + '/newest';
  console.log(addr);

  useEffect(() => {
    getbook();
  }, []);

  async function getbook() {
    await axios
      .get(addr)
      .then((response) => {
        setbook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='neweast container col-xl-6 col-lg-6'>
      <div className='carousel container-fluid mt-4'>
        <Carousel cols={2} rows={1} gap={15} loop>
          {book.map((item) => {
            return (
              <Carousel.Item key={item.book_num}>
                <div id='book-image'>
                  <a href={'/book/' + item.book_num}>
                    <img src={item.book_image} alt={item.book_title} />
                  </a>
                </div>
                <div>
                  <p id='book-ranking'>#1</p>
                  <p id='book-title'>{item.book_title}</p>
                  <p id='book-category'>{item.category_code}</p>
                </div>
              </Carousel.Item>
            );
          })}
          ;
        </Carousel>
      </div>
    </div>
  );
};

export default NewestSmall;
