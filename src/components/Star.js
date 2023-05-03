import React from 'react';
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = (props) => {

  const ratingStar = Array.from({length: 5}, (elem, index) =>{

    return(
        <span key={index}>
          {
            props.stars < 1 ? (
                <FaStar className='full-star' />
            ):(
                <AiOutlineStar />
            )
          }
        </span>
    )
  })  

  return (
    <div className='full-star'>
     {ratingStar}
    </div>
  )
}

export default Star