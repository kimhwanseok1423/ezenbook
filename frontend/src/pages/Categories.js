import '../css/bootstrap.min.css';
import '../css/category.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../components/commonApi/mainApi';
const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  async function getCategory() {
    await axios
      .get(`${baseUrl}/categorydata`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ul>
      <li className='categorylist_li'>
        <a href='/category'>전체</a>
      </li>
      {category.map((category) => {
        return (
          <li
            className='categorylist_li'
            key={category.category_code}
            id={'category_' + category.category_code}
          >
            <a href={`/category/${category.category_code}`}>
              {category.category_name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
