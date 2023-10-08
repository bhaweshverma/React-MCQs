import { useState } from "react";
import StarRating from "./Star Rating/StarRating";
const Product = ({ productDetails, onProductClick }) => {
  const { id, title, price, description, category, image, rating } =
    productDetails;

  const shortDescription =
    description.length > 60 ? description.slice(0, 55) + "..." : description;

  // function handlePopup() {
  //   setPopupStatus(!popupStatus);
  // }
  return (
    <>
      <div className="product" onClick={() => onProductClick(productDetails)}>
        <img src={image} alt="product image" />
        <h3>{title}</h3>
        <h4>{shortDescription}</h4>
        <StarRating rating={rating.rate} />
        {/* <div className="tooltip">
          <ul>
            <li>{price}</li>
            <li>{category}</li>
            <li>{rating.rate}</li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Product;
