import React, { useEffect, useState } from "react";
import "./Book.css";
import { AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
import { BsBook } from "react-icons/bs"
import Pagination from "./Pagination"

function Books({ defbook }) {

  const [queryStr, setQueryStr] = useState("")
  let [filteredData, setFilteredData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(4)


  const handleChange = (e) => {
    setQueryStr(e.target.value)
    if (queryStr) {
      const arr = defbook.filter(book => book.title.toLowerCase().includes(queryStr.toLowerCase()))
      setFilteredData(arr)
    } else {
      setFilteredData(defbook)
    }
  }

  useEffect(() => {
    if (queryStr === "")
      setFilteredData(defbook)
  })

  let indexOfLastPost = currentPage * postPerPage
  let indexOfFirstPost = indexOfLastPost - postPerPage
  filteredData = filteredData.slice(indexOfFirstPost, indexOfLastPost)

  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="Book-main-cont">
      <h1>Buy and Sell Books</h1>
      <div className="symbol">
        <hr className="left" />
        < BsBook className="book-symbol" />
        <hr className="right" />
      </div>
      <div className="search-container">
        <input type="text" className="search-input"
          placeholder="Search Books..." onChange={(e) => handleChange(e)}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="Book-container">
        {
          filteredData.map((book, indx) => (
            <div key={indx} className="card-container">
              <img src={book.book_image} alt="book" />
              <div className="card-info">
                <h3 className='book-name'>{book.title}</h3>
                < p p className='book-price' > {`$${book.book_image_width}`
                } </p >
                <div>
                  <button className='btn'>Buy Now</button>
                  <span className='favorite'><AiOutlineHeart /></span>
                  {/* Cart */}
                  <span className='update-btn like-btn'
                  ><AiOutlineLike /></span>
                </div>
              </div >
              <div className="card-desc">
                <p>{book.description}</p>
              </div>
            </div >
          ))
        }
      </div>
      <Pagination postPerPage={postPerPage} totalPost={defbook.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Books;