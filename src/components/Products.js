import { useEffect, useState } from "react";
import Product from "./Product";
import Popup from "./Popup";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [popupStatus, setPopupStatus] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    FetchProducts();
  }, []);

  const FetchProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");

    let json = await response.json();
    //console.log(json);
    setProducts(json);
  };

  function handleOnProductClick(product) {
    setSelectedProduct(product);
    setPopupStatus(true);
  }

  return (
    <>
      {popupStatus && <h4>Clicked product - {selectedProduct.title}</h4>}
      <div className="products">
        {products.map((prod) => (
          <Product
            key={prod.id}
            productDetails={prod}
            onProductClick={(product) => handleOnProductClick(product)}
          />
        ))}
      </div>
      {popupStatus && (
        <Popup trigger={popupStatus} onClose={() => setPopupStatus(false)}>
          <h1>{selectedProduct.title}</h1>
          <ul>
            <li>Price : {selectedProduct.price}</li>
            <li>Category : {selectedProduct.category}</li>
            <li>Rating: {selectedProduct.rating.rate}</li>
          </ul>
        </Popup>
      )}
    </>
  );
};

export default Products;
