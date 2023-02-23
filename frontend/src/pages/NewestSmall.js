import '../css/carouselSmall.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../components/commonApi/mainApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

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
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={2}
        >
          {book.map((item, index) => {
            return (
              // <div className='carousel-item container d-flex' >
              <SwiperSlide key={index}>
                <div className='carousel-items'>
                  <a href={'/book/' + item.book_num} id='carousel-img'>
                    <img src={item.book_image} alt={item.book_title} />
                  </a>
                </div>
                <div>
                  <p id='book-ranking'>#{item.book_num}</p>
                  <p id='book-title'>{item.book_title}</p>
                  <p id='book-category'>{item.category_code}</p>
                </div>
              </SwiperSlide>
              // </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default NewestSmall;
