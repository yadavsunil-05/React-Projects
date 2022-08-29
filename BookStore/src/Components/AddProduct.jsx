import React, { useState } from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUserBook } from "../actions/index";
import { useDispatch } from "react-redux";

function AddProduct() {
  const [title, setBName] = useState();
  const [book_image_width, setPrice] = useState();
  const [description, setDesc] = useState();
  const [book_image, setImage] = useState();

  const dispatch = useDispatch();

  const handleAdd = async (e) => {
    e.preventDefault();
    if (title && book_image_width && description && book_image) {
      dispatch(
        addUserBook({
          rank: new Date().getTime().toString(),
          title,
          book_image_width,
          description,
          book_image,
        })
      );
      toast.success("Book Ready to Sell..");
      setBName("");
      setPrice("");
      setDesc("");
      setImage("");
    } else {
      toast.error("Please Enter All Fields...");
    }
  };

  return (
    <>
      <div className="prod-container">
        <h1>Add Book Today! Start Selling.</h1>
        <div className="form-container">
          <form onSubmit={handleAdd}>
            <input
              type="text"
              placeholder="Enter Book Name"
              className="add-input"
              value={title}
              onChange={(e) => setBName(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder="Enter Price"
              className="add-input"
              value={book_image_width}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Description"
              className="add-input"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Image Url"
              className="add-input"
              value={book_image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button className="sub-btn">ADD BOOK</button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default AddProduct;
