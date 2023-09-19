import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import NavBar from './Components/NavBar';
import ProductDetail from './Components/ProductDetail';
import CartPage from './Components/CartPage';
import NoMatch from './Components/NoMatch';
import Product from './Components/Product';
import HotProduct from './Components/HotProduct';
import SimilarProduct from './Components/SimilarProduct';
import User from './Components/User';
import UserDetail from './Components/UserDetail';

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/productdetail' element={<ProductDetail />} />
      <Route path='/cartpage' element={<CartPage />} />

      <Route path='/product' element={<Product />} > 
        <Route path='hotproduct' element={<HotProduct />} />
        <Route path='similarproduct' element={<SimilarProduct />} />        
      </Route>

      <Route path='/user' element={<User />} />
      <Route path='/user/:userId' element={<UserDetail />} />

      <Route path='*' element={<NoMatch />} />

     </Routes>
    </div>
  );
};

export default App;