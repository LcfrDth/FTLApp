import React, {useState, useEffect} from 'react';

// Commerce JS
import { commerce } from '../lib/Commerce';

// React Router
import { Route, Switch, withRouter } from "react-router-dom";

// Pages
import Landing from '../pages/Landing';
import Cart from '../components/Cart/Cart';

const Routes = () => {

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
    localStorage.setItem("cartItem", JSON.stringify(response.line_items));
  };

  const handleEmptyData = async () => {
    const response = await commerce.cart.empty();
    setCartData(response.cart);
    localStorage.removeItem("cartItem");
    window.location = "/"
  };
  
  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCartData(response.cart.line_items);
    localStorage.setItem("cartItem", JSON.stringify(response.cart.line_items));
  };

  const updateData = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCartData(response.cart.line_items);
    // localStorage.setItem("cartItem", JSON.stringify(response.cart));
  };

  const removeItem = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setCartData(response.cart);
  };
    


  /* useEffect */
  useEffect(() => {
    getProducts();
    getCartData();
  }, []);

  return (
    <Switch>

        {/* Landing Component */}
        <Route exact path="/">
          <Landing 
            cartData={cartData}
            products={products}
            addProduct={addProduct}
          />  
        </Route>
        
        {/* Cart Component */}
        <Route exact path="/cart">
          <Cart 
            updateData={updateData}
            handleEmptyData={handleEmptyData}
            removeItem={removeItem}    
          />
        </Route>

    </Switch>
  )
}

export default withRouter(Routes);
