import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartOrder = () => {

  const navigate = useNavigate();
  const {allCart} = useSelector((state)=> state.ProductsReducer)
  console.log(allCart);

  const OrderisSuccess = () =>{
    navigate('/success')
  }


  return (
    <div className='cartorder-container'>
      <div className='cartorder-container-items'>
        <div>
          <div className='cartorder-container-items-header'>
            <h3>WELCOME TO ITALIAN PIZZA!</h3>
            <p>We deliver pizza in 40 minutes max. If not - Pizza on us!</p>
          </div>
          <form>
            <p>Email</p>
            <input type='email' />
            <p>Phone</p>
            <input type='text' placeholder='Area' />
            <input type='text' placeholder='Local' />
            <input type='text' placeholder='Local' />
            <p>Number of slices</p>
            <input type='number' />
            <p>Pizza Size</p>
            <input type='radio' name="size"/><span>8-inch</span>
            <input type='radio' name="size"/><span>10-inch</span>
            <input type='radio' name="size"/><span>12-inch</span>
            <input type='radio' name="size"/><span>14-inch</span>
            <p>Toppings</p>
            <input type='checkbox'/> Pepperoni
            <input type='checkbox'/> Onions
            <input type='checkbox'/> Mushrooms
            <input type='checkbox'/> Sausage
            <br/>
            <div className='cartorder-term-condition'>
              <span id='red-star'>*</span>
              <input type='checkbox' />
              <span>I agree ti the <b>TERMS AND CONDITIONS</b></span>
            </div>
          </form>
          <div className='cartorder-order-btn'>
            <button onClick={()=>OrderisSuccess(allCart)}>ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartOrder;