import React from "react";
import "./Pagination.css"

function Pagination({ postPerPage, totalPost, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="page_container">
        {pageNumbers.map((num) => (
          <li key={num} className="page_list" onClick={() => paginate(num)}>
            <a href="#" className="page_number">{num}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
