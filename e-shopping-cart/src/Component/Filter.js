import React, { useContext } from 'react'
import { Form, Button } from "react-bootstrap"
import { cartStore } from '../Context/ContextStore'
import "../style.css"
import Rating from './Rating'


function Filter() {


  const { filterState: { byStock,
    byFastDelivery,
    byRating,
    sort }, filterDispatch } = useContext(cartStore)

  console.log(byStock,
    byFastDelivery,
    byRating,
    sort);

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
          onChange={() => filterDispatch({
            type: "SORT_BY_PRICE",
            payload: "LowToHigh"
          })}
          checked={sort === "LowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="High to Low"
          name="group1"
          type="radio"
          id="inline-1"
          onChange={() => filterDispatch({
            type: "SORT_BY_PRICE",
            payload: "HighToLow"
          })}
          checked={sort === "HighToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Out of Stock"
          name="group1"
          type="checkbox"
          id="inline-3"
          onChange={() => filterDispatch(
            {
              type: "FILTER_BY_STOCK"
            }
          )}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery"
          name="group1"
          type="checkbox"
          id="inline-3"
          onChange={() => filterDispatch(
            {
              type: "FILTER_BY_DELIVERY"
            }
          )}
          checked={byFastDelivery}
        />
      </span>
      <span>
        Ratings <Rating rating={byRating} onClick={(i) => filterDispatch({
          type: "FILTER_BY_RATING",
          payload: i + 1,
        })} />
      </span>
      <Button variant="light" onClick={() => filterDispatch(
        {
          type: "CLEAR_FILTERS"
        }
      )}>Clear Filter</Button>
    </div>
  )
}

export default Filter