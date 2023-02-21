import '../css/bootstrap.min.css';
import '../css/category.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../components/commonApi/mainApi';
const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    console.log('category_list loaded');
    getCategory();
  }, []);

  async function getCategory() {
    await axios
      .get(baseUrl + '/categorydata')
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ul>
      {category.map((category) => {
        return (
          <li className='categorylist_li' key={category.category_code}>
            <Link to={'/category/' + category.category_code}>
              {category.category_name}
            </Link>
          </li>
        );
      })}
      ;
    </ul>
  );
};

export default Categories;
