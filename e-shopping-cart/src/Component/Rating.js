import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
function Rating({ rating, onClick }) {
  return (
    <>
      {
        [...Array(5)].map((_, i) => (
          <span key={i} onClick={() => onClick(i)} className="ratings">
            {rating > i ?
              <AiFillStar /> :
              <AiOutlineStar />
            }
          </span >
        ))
      }
    </>
  )
}

export default Rating