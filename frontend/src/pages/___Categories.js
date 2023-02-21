import '../css/bootstrap.min.css';
import '../css/category.css';
import { Link } from 'react-router-dom';
const Categories = () => {
  const book_category = [
    {
      code: 1,
      name: '전체',
    },
    {
      code: 2,
      name: '소설',
    },
    {
      code: 3,
      name: '시/에세이',
    },
    {
      code: 4,
      name: '경제/경영',
    },
    {
      code: 5,
      name: '자기계발',
    },
    {
      code: 6,
      name: '인문',
    },
    {
      code: 7,
      name: '역사/문화',
    },
    {
      code: 8,
      name: '사회',
    },
    {
      code: 9,
      name: '과학',
    },
    {
      code: 10,
      name: '예술/종교',
    },
    {
      code: 11,
      name: '어린이/청소년',
    },
    {
      code: 12,
      name: '생활',
    },
    {
      code: 13,
      name: '취미',
    },
    {
      code: 14,
      name: '어학',
    },
    {
      code: 15,
      name: 'IT',
    },
    {
      code: 16,
      name: '학습',
    },
    {
      code: 17,
      name: '해외도서',
    },
    {
      code: 18,
      name: '라이트노벨',
    },
    {
      code: 19,
      name: '만화',
    },
    {
      code: 20,
      name: '기타',
    },
  ];
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
