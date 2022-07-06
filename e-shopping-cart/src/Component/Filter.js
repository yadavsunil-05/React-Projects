import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import "../style.css"
import Rating from './Rating'


function Filter() {

  const [rate, setRate] = useState(3)

  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Low to High"
          name="group1"
          type="radio"
          id="inline-1"
        />
      </span>
      <span>
        <Form.Check
          inline
          label="High to Low"
          name="group1"
          type="radio"
          id="inline-1"
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Out of Stock"
          name="group1"
          type="checkbox"
          id="inline-3"
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery"
          name="group1"
          type="checkbox"
          id="inline-3"
        />
      </span>
      <span>
        Ratings <Rating rating={rate} onClick={(i) => setRate(i + 1)} />
      </span>
      <Button variant="light">Clear Filter</Button>
    </div>
  )
}

export default Filter