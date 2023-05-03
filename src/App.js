import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import DetailsPage from './pages/DetailsPage';
import CartOrder from './pages/CartOrder';
import OrderSuccess from './pages/OrderSuccess';
import Pages from './pages/Pages';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/details' element={<DetailsPage />} />
        <Route path='/carts' element={<CartOrder />} />
        <Route path='/success' element={<OrderSuccess />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/events' element={<Events />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
