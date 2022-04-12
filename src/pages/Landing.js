import React, {useState, useEffect} from 'react';

// Commerce JS
import { commerce } from '../lib/Commerce';

/* Components */
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';

const Landing = () => {

  /* State Management */
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});
  
  const getProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  }
  
  const getCartData = async () => {
    const response = await commerce.cart.retrieve();
    setCartData(response);
  };

  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCartData(response.cart);
  };
  
  useEffect(() => {
    getProducts();
    getCartData();
  }, []);

  return (
    <>
      <Header cartData={cartData} />
      <Home products={products} addProduct={addProduct} />
      <Footer />
    </>
  )
}

export default Landing;
