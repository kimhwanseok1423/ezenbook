import '../css/bootstrap.min.css';
import '../css/category.css';
import { Link, useLocation } from 'react-router-dom';
const Categories = () => {
  return (
    <ul>
      <li className='categorylist_li'>
        <Link to='/category'>전체</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/2'>소설</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/3'>시/에세이</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/4'>경제/경영</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/5'>자기계발</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/6'>인문</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/7'>역사/문화</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/8'>사회</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/9'>과학</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/10'>예술/종교</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/11'>어린이/청소년</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/12'>생활</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/13'>취미</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/14'>어학</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/15'>IT</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/16'>학습</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/17'>해외도서</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/18'>라이트노벨</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/19'>만화</Link>
      </li>
      <li className='categorylist_li'>
        <Link to='/categorylist/20'>기타</Link>
      </li>
    </ul>
  );
};

export default Categories;
