// di na natin gagamitin 
import React, {useState, useEffect} from 'react';

// Commerce JS
import { commerce } from './lib/Commerce';

// React Router
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Components
import Header from './components/Header';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Footer from './components/Footer';

const App = () => {

  /* State Management */
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});
  
  /* Functions */
  const getProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  }
    
  const getCartData = async () => {
    const response = await commerce.cart.retrieve();
    setCartData(response)
  };

  const handleEmptyData = async () => {
    const response = await commerce.cart.empty();
    setCartData(response.cart);
  };
  
  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCartData(response.cart);
  };

  const updateData = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCartData(response.cart);
  };

  const removeItem = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setCartData(response.cart);
  };

  const refreshBasket = async () => {
    const newCartData = await commerce.cart.refresh();
    setCartData(newCartData);
  };
    


  /* useEffect */
  useEffect(() => {
    getProducts();
    getCartData();
  }, []);

  return (
    <Router>
        {/* Header Component */}
        <Header 
            cartData={cartData.total_items}
            subTotal={
                (
                cartData.subtotal && cartData.subtotal.formatted_with_symbol
                ) || "00.00"
            }
        />
        <Switch>

            {/* Root Component */}
            <Route exact path="/">
                <Products 
                    products={products}
                    addProduct={addProduct}
                />
            </Route>
            
            {/* Cart Component */}
            <Route exact path="/cart">
                <Cart 
                    cartData={cartData}
                    updateData={updateData}
                    handleEmptyData={handleEmptyData}
                    removeItem={removeItem}    
                />
            </Route>

            {/* Checkout Component */}

        </Switch>
        <Footer />
    </Router>
  )
}

export default App;
