import React from 'react'
import "./Banner.css"
import Book from './Book'
import 'react-lazy-load-image-component/src/effects/blur.css';

function Banner() {
  return (
    <>
      <div className='banner'>
        <div className="jumbotron main-header-sec" id="jumbotron">
          <div className="jumbotron-txt-container-1">
            <h1 className="display-4">
              ANTIQUE BOOK
              <br />STORE
            </h1>
            <p className="lead">
              We have best ebook offers for you grab the best offer, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
            <a className="banner-btn" href="#products" role="button">Buy Now</a>
          </div>
          <div className="jumbotron-txt-container-2">
            <img src="https://musemaster.net/prebook-html/assets/book-mockup.png" alt="banner" />
          </div>
        </div>
      </div>
      <Book />
    </>
  )
}

export default Banner