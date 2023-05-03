import React, { useEffect } from 'react'
import LeftNav from '../components/LeftNav';
import RightMain from '../components/RightMain';
import { useDispatch, useSelector } from 'react-redux';
import { AddProducts } from '../Redux/ProductsReducer';

const Home = () => {

  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.ProductsReducer)
  // console.log(allProducts)

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
    <div className='home-container'>
      <LeftNav />
      <RightMain data={allProducts}/>
    </div>
  )
}

export default Home;