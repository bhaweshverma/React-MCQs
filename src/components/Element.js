import { useState } from "react";
import "./Element.css";

const Element = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const { product } = props;

  return (
    <>
      <div className="accord">
        <p key={product.id}>{product.title}</p>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {!showInfo ? "➕" : "➖"}
        </button>
      </div>
      {showInfo && (
        <div className="accord-info">
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
};

export default Element;
