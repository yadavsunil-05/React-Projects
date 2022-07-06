import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { AiFillStar, AiFillDelete } from "react-icons/ai"

function SingleProduct({ product }) {
  return (
    <div>
      <Card className='products'>
        <Card.Img variant="top" src={product.image} className="image" />
        <Card.Body>
          <Card.Title className='prod-title'>{`${product.title.slice(0, 20)}...`}</Card.Title>
          <h6 className='prod-price'>${product.price}</h6>
          <Card.Subtitle className="mb-2 text-muted">
            <span className='delivery'>
              {product.fastDelivery ? <div>Fast Delivery</div> : <div> 4 days delivery </div>}
            </span>
            <span className="prod-ratings">
              {Math.ceil(product.rating.rate) >= 1 && <AiFillStar />}
              {Math.ceil(product.rating.rate) >= 2 && <AiFillStar />}
              {Math.ceil(product.rating.rate) >= 3 && <AiFillStar />}
              {Math.ceil(product.rating.rate) >= 4 && <AiFillStar />}
              {Math.ceil(product.rating.rate) >= 5 && <AiFillStar />}
            </span>
          </Card.Subtitle>
          <div className='Btn-Container'>
            <Button disabled={!product.inStock}>
              {(product.inStock) ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button variant="danger"><AiFillDelete /></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct