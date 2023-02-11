import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/mainpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';

const MainMenu = () => {
  const multipleItemCarousel = document.querySelector(
    '#carouselExampleControls'
  );

  if (window.matchMedia('(min-width:576px)').matches) {
    const carousel = new Carousel(multipleItemCarousel, {
      interval: false,
    });

    var carouselWidth = '.carousel-inner'[0].scrollWidth;
    var cardWidth = '.carousel-item'.width();

    var scrollPosition = 0;

    '.carousel-control-next'.on('click', function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        console.log('next');
        scrollPosition = scrollPosition + cardWidth;
        '.carousel-inner'.animate({ scrollLeft: scrollPosition }, 600);
      }
    });
    '.carousel-control-prev'.on('click', function () {
      if (scrollPosition > 0) {
        console.log('prev');
        scrollPosition = scrollPosition - cardWidth;
        '.carousel-inner'.animate({ scrollLeft: scrollPosition }, 600);
      }
    });
  } else {
    multipleItemCarousel.addClass('slide');
  }

  return (
    <div>
      <div
        id='carouselExampleControls'
        class='carousel'
        data-bs-ride='carousel'
      >
        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <div class='card'>
              <div class='img-wrapper'>
                <img
                  src='https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-1-card-1.jpg'
                  alt='...'
                />
              </div>
              <div class='card-body'>
                <h5 class='card-title'>Card title 1</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='card'>
              <div class='img-wrapper'>
                <img
                  src='https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-1-card-2.jpg'
                  alt='...'
                />
              </div>
              <div class='card-body'>
                <h5 class='card-title'>Card title 2</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='card'>
              <div class='img-wrapper'>
                <img
                  src='https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-1-card-3.jpg'
                  alt='...'
                />
              </div>
              <div class='card-body'>
                <h5 class='card-title'>Card title 3</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='card'>
              <div class='img-wrapper'>
                <img
                  src='https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-2-card-1.jpg'
                  alt='...'
                />
              </div>
              <div class='card-body'>
                <h5 class='card-title'>Card title 4</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='card'>
              <div class='img-wrapper'>
                <img
                  src='https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-2-card-2.jpg'
                  alt='...'
                />
              </div>
              <div class='card-body'>
                <h5 class='card-title'>Card title 5</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='card'>
              <div class='img-wrapper'>
                <img
                  src='https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-2-card-3.jpg'
                  alt='...'
                />
              </div>
              <div class='card-body'>
                <h5 class='card-title'>Card title 6</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='card'>
              <div class='img-wrapper'>
                <img
                  src='https://codingyaar.com/wp-content/uploads/bootstrap-multiple-items-carousel-slide-3-card-1.jpg'
                  alt='...'
                />
              </div>
              <div class='card-body'>
                <h5 class='card-title'>Card title 7</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='card'>
              <div class='img-wrapper'>
                <img
                  src='https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-3-card-2.jpg'
                  alt='...'
                />
              </div>
              <div class='card-body'>
                <h5 class='card-title'>Card title 8</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='card'>
              <div class='img-wrapper'>
                <img
                  src='https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-3-card-3.jpg'
                  alt='...'
                />
              </div>
              <div class='card-body'>
                <h5 class='card-title'>Card title 9</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>

      <p class='mt-5 text-center'>
        Get a step-by-step written explanation here:{' '}
        <a
          href='https://codingyaar.com/bootstrap-carousel-multiple-items-increment-by-1/'
          target='_blank'
        >
          Bootstrap 5 carousel multiple items responsive
        </a>{' '}
      </p>
    </div>
  );
};

export default MainMenu;
