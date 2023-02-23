import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { baseUrl } from '../components/commonApi/mainApi';
import StarRate from '../components/Shared/StarRate';
import ReviewList from './Review_list';

const Review = (props) => {
  const id = props.id;
  const [review, setReview] = useState([]);
  const book_num = parseInt(id);
  const [inputs, setInputs] = useState('');
  console.log(id);

  useEffect(() => {
    getReview(book_num);
  }, []);

  async function getReview(book_num) {
    await axios
      .get(baseUrl + '/review/' + book_num)
      .then((response) => {
        setReview(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const insertReview = async (e) => {
    e.preventDefault();
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const form = new FormData();

    form.append('user_id', 11);
    form.append('book_num', id);
    form.append('review_content', inputs);
    form.append('review_rating', 5);
    form.append('review_writer', 'userNick11');

    await axios
      .post(baseUrl + '/review', form, config)
      .then((response) => {
        console.log('post: ' + response.data);
        getReview(book_num);
        setInputs('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    let nextState = [];
    nextState[e.target.name] = e.target.value;
    console.log(nextState[e.target.name]);
    setInputs(nextState[e.target.name]);
  };
  return (
    <>
      <h4>책 리뷰</h4>
      <hr />
      <div>
        <StarRate />
      </div>
      <form>
        <textarea rows='4' cols='100' onChange={handleValueChange}></textarea>
        <input type='button' value='등록' onClick={insertReview} />
        <hr />
      </form>
      <ul>
        {review &&
          review.map((reviews) => {
            return <ReviewList key={reviews.review_num} reviews={reviews} />;
          })}
      </ul>
    </>
  );
};

export default Review;
