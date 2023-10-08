import { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const limitPerPage = 10;
  const lastIndex = currentPage * limitPerPage;
  const firstIndex = lastIndex - limitPerPage + 1;
  const totalProducts = 100;
  const pageNumbers = new Array(totalProducts / limitPerPage)
    .fill(0)
    .map((v, i) => i + 1);

  useEffect(() => {
    FetchProducts((currentPage - 1) * limitPerPage);
  }, [currentPage]);

  const FetchProducts = async (skip) => {
    let response = await fetch(
      "https://dummyjson.com/products?limit=" + limitPerPage + "&skip=" + skip,
    );

    let json = await response.json();
    //console.log(json.products);
    setProducts(json.products);
  };

  function handleCurrentPageClick(index) {
    //console.log(index);
    setCurrentPage(index);
  }
  function handlePrevClick() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }
  function handleNextClick() {
    if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1);
  }
  //console.log(pageNumbers);

  return (
    <div>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => {
            return (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.title}</td>
                <td>{prod.price}</td>
                <td>{prod.rating}</td>
                <td>{prod.brand}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pages">
        <ul className="list">
          <li className="list-item">
            <a href="#/" onClick={handlePrevClick}>
              Prev
            </a>
          </li>
          {pageNumbers.map((val, i) => (
            <li className="list-item" key={i}>
              <a href="#/" onClick={() => handleCurrentPageClick(val)}>
                {val}
              </a>
            </li>
          ))}
          <li className="list-item">
            <a href="#/" onClick={handleNextClick}>
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
