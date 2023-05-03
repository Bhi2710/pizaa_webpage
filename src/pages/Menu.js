import React,{ useEffect } from 'react';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddProducts } from '../Redux/ProductsReducer';

const Menu = () => {

  const { allCart } = useSelector((state) => state.ProductsReducer);

  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.ProductsReducer)
  console.log(allProducts)

  useEffect(() => {
    fetch('https://pizzaallapala.p.rapidapi.com/productos', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b28cd48ddamshe4b6af2d8d1c666p1ae543jsn39e20bd0e402',
        'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data.productos);
        dispatch(AddProducts(data.productos))
      })
      .catch(err => {
        console.log(err, "Error")
      })
  }, [])


  return (
    <div className='menu-top-container'>
      <div className='menu-container'>
        <div className='menu-logo-container'>
          <div>
            <img src={logo} alt="loading" width="50px" height="50px" />
          </div>
          <div className='menu-lists'>
            <Link to='/'>HOME</Link>
            <Link to='/pages'>PAGES</Link>
            <Link to='/menu'>MENU</Link>
            <Link to='/events'>EVENTS</Link>
            <Link to='/blog'>BLOG</Link>
            <Link to='/landing'>LANDING</Link>
          </div>
        </div>
        <div className='menu-buttons'>
          <p><span>({allCart.length})</span> CART</p>&emsp;
          <button>ORDER ONLINE</button>
        </div>
      </div>
      <div className='menu-light'>
        <p>CHOOSE YOUR FAVORITE</p>
        <h3>MENU LIGHT</h3>
      </div>
      <div className='rightmain-products-container'>
        {
          allProducts.slice(0, 15).map((ele,idx)=>{
            return(
              <div key={idx} className='rightmain-products'>
                <div className='rightmain-products-images'>
                  <img src={ele.linkImagen !== null ? ele.linkImagen : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
                    alt={ele.nombre} width="250px" height="250px"
                  />
                </div>
                <div className='rightmain-products-texts'>
                  <p>{ele.nombre}</p>
                  <p>₹ {ele.precio}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Menu;