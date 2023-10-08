import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  let numbers = new Array(5).fill(0).map((e, i) => i + 1);

  return (
    <>
      {numbers.map((e) => {
        return rating >= e ? (
          <span>
            <FaStar />
          </span>
        ) : rating >= e - 0.5 ? (
          <span>
            <FaStarHalfAlt />
          </span>
        ) : (
          <span>
            <FaRegStar />
          </span>
        );
      })}
      <p>{rating}</p>
    </>
  );
};

export default StarRating;
