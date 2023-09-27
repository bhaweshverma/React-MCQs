import "./Accordion.css";

import { useEffect, useState } from "react";
import Element from "./Element";

const Accordion = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchProducts();
  }, []);

  const FetchProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");

    let json = await response.json();
    //console.log(json);
    setProducts(json);
  };

  return (
    <>
      <div className="container">
        <div className="container-inner">
          <h1>Product Accordion</h1>
          {products.map((prod, index) =>
            index < 5 ? <Element product={prod} /> : <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
