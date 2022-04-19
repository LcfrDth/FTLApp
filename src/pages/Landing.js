import React from 'react';

/* Components */
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';

const Landing = ({cartData, products, addProduct}) => {

  return (
    <>
      <Header cartData={cartData} />
      <Home products={products} addProduct={addProduct} />
      <Footer />
    </>
  )
}

export default Landing;
