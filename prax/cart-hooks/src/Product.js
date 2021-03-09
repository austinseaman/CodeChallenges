import React from "react";

import { CartContext } from "./CartProvider";

const id = (() => {
    let x = 0;
    return () => x++;
})();

export const Product = () => {
  const cartAPI = React.useContext(CartContext);


  const handleAdd= () => {
    cartAPI.addToCart({
        id: id(),
        name: 'test'
    })
  }

  const handleClear = () =>{
      cartAPI.clearCart();
  }

  return (
    <div>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
