import React, { useState } from 'react';
import check from '../assets/check.png';
import Star from './Star';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddDetails } from '../Redux/ProductsReducer';
import { AddCart } from '../Redux/ProductsReducer';

const RightMain = (props) => {

  console.log(props.data)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ishover, setIshover] = useState(null);

  const handleDetail = (ele) => {
    dispatch(AddDetails(ele));
    navigate('/details')
  }

  const handleAddCart = (ele) => {
    dispatch(AddCart(ele))
    navigate('/carts')
  }

  return (
    <div className='rightmain-container'>
      <div className='rightmain-bgimages'>
        <div className='rightmain-texts'>
          <h1>DELIVERY TO THE DOORSTEP</h1>
          <p className='rightmain-texts-check'>
            <img src={check} alt='loading' width='20px' height='20px' />&nbsp;
            Choose your ingredients
          </p>
          <p className='rightmain-texts-check'>
            <img src={check} alt='loading' width='20px' height='20px' />&nbsp;
            Get free delivery 24/7
          </p>
          <p className='rightmain-texts-check'>
            <img src={check} alt='loading' width='20px' height='20px' />&nbsp;
            Special gift coupons
          </p>
          <div className='rightmain-form'>
            <input type='email' placeholder='Email...' />&nbsp;
            <button>SUBSCRIBE</button>
          </div>
          <div className='rightmain-scroll-container'>
            <p>Scroll</p>
          </div>
        </div>
        <div className='rightmain-bestoffer'>
          <p>BEST</p>
          <p>OFFER</p>
        </div>
      </div>

      <div className='rightmain-products-container'>
        {
          props.data.map((ele, idx) => {
            return (
              <div key={idx} className='rightmain-products'
                onMouseEnter={() => setIshover(ele.id)}
                onMouseLeave={() => setIshover(null)}
              >
                <div className='rightmain-products-images'>
                  <img src={ele.linkImagen !== null ? ele.linkImagen : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
                    alt={ele.nombre} width="250px" height="250px"
                  />
                </div>
                <div className='rightmain-products-texts'>
                  <p>{ele.nombre}</p>
                  <Star stars={ele.tasaIva} />
                  <p>₹ {ele.precio}</p>
                </div>
                <div className={ishover === ele.id ? "" : 'rightmain-products-buttons'}>
                  <button onClick={() => handleAddCart(ele)} className='rightmain-addtocart'>ADD TO CART</button>&nbsp;
                  <button onClick={() => handleDetail(ele)} className='rightmain-details'>QUICK VIEW</button>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default RightMain;