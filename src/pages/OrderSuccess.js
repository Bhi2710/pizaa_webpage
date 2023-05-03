import React from 'react';
import scooter from '../assets/scooter.png'

const OrderSuccess = () => {
  return (
    <div className='hero'>
      <h2>Order successfully Placed</h2>
      <div className='highway'></div>
      <div className='city'></div>
      <div className='bike'>
        <img src={scooter} alt='loading' />
      </div>
    </div>
  )
}

export default OrderSuccess;