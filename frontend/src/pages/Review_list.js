const ReviewList = ({ reviews }) => {
  return (
    <li>
      <div>
        <div>{reviews.review_num}</div>
        <div>{reviews.user_id}</div>
        <div>{reviews.review_writer}</div>
        <div>{reviews.review_rating}</div>
        <div>{reviews.review_reporting_date}</div>
      </div>
      <div>
        <div>{reviews.review_content}</div>
      </div>
      <button>수정</button>
      <button>삭제</button>
    </li>
  );
};

export default ReviewList;
