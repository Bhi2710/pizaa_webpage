import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import Star from '../components/Star';
import { useNavigate } from 'react-router-dom'
import { AddCart } from '../Redux/ProductsReducer';

const DetailsPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allDetails } = useSelector((state) => state.ProductsReducer);
  console.log(allDetails)

  const handleClick = (event) =>{
    dispatch(AddCart(event))
    navigate('/carts')
  }

  return (
    <div>
      {
        allDetails.length === 0 ? (<h1 style={{textAlign:"center", color:"red", marginTop:"50px"}}>Details Not Found...</h1>) : (
          <div className='detailsPage-product-container'>
            {
              allDetails.map((ele, idx) => {
                return (
                  <div className='detailsPage-products'>
                    <div className='detailsPage-products-image'>
                      <div className='detailsPage-image'>
                        <img src={ele.linkImagen} alt="loading"/>
                      </div>
                    </div>
                    <div className='detailsPage-product-details'>
                        <h2>{ele.nombre}</h2>
                        <Star />
                        <p>{ele.precio}</p>
                        <p>{ele.descripcion}</p>
                        <div>
                          <button onClick={()=>handleClick(ele)} className='rightmain-addtocart'>ADD TO CART</button>
                        </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }

    </div>
  )
}

export default DetailsPage;