import "./Accordion.css";
import { useEffect, useState } from "react";

const AccordionWithCommonState = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  function toggle(i) {
    if (selected === i) setSelected(null);

    setSelected(i);
  }
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
          {products.map((product, index) =>
            index < 5 ? (
              <>
                <div className="accord">
                  <p key={product.id}>{product.title}</p>
                  <button className="btn" onClick={() => toggle(index)}>
                    {selected !== index ? "➕" : "➖"}
                  </button>
                </div>
                {selected === index && (
                  <div className="accord-info">
                    <p>{product.description}</p>
                  </div>
                )}
              </>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default AccordionWithCommonState;
