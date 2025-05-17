import { Link } from 'react-router-dom';

import React from 'react';


const Navigation = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="block">
        <Link to="/">Home</Link>
      </div>
      <div className="block">
        <Link to="/products">Products</Link>
      </div>
      <div className="block">
        <Link to="/cart">Cart</Link>
      </div>
      <div className="block">
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Navigation;
