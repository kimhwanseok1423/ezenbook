import MainMenu from '../pages/MainMenu';
import Curation from '../pages/Curation';
import BestSeller from '../pages/Bestseller';
import Newest from '../pages/Newest';
import '../css/main.css';
import '../css/bootstrap.min.css';

const Home = () => {
  return (
    <div className='Main-body'>
      <MainMenu />
      <Curation />
      <div className='container-fulid d-flex col-xl-12 col-lg-12 mt-3'>
        <div className='col-xl-6 col-lg-6' id='bestseller-body'>
          <h4>베스트셀러</h4>
          <div className='card mt-3'>
            <BestSeller />{' '}
          </div>
        </div>
        <div className='col-xl-6 col-lg-6' id='newest-body'>
          <h4>오늘의 신간</h4>
          <div className='card mt-3'>
            <Newest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
