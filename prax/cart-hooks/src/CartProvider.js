import React from "react";

export const useCart = (initialCart = []) => {
  const [cart, setCart] = React.useState(initialCart);

  const addToCart = (product) => {
    const existingCartItem = cart.find(
      (item) => item.product.id === product.id
    );
    if (existingCartItem) {
      setCart(
        cart.map((item) =>
          item === existingCartItem
            ? { ...existingCartItem, count: existingCartItem.count + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { count: 1, product }]);
    }
  };

  //remove item

  // edit item

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    setCart,
    addToCart,
    clearCart,
  };
};

const useCartEffects = (cartAPI) => {
  React.useEffect(() => {
    const cachedCart = JSON.parse(localStorage.getItem("cart-data")) || [];

    cartAPI.setCart(cachedCart);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("cart-data", JSON.stringify(cartAPI.cart));
  }, [cartAPI.cart]);
};

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const cartAPI = useCart();

  useCartEffects(cartAPI);

  return (
    <CartContext.Provider value={cartAPI}>
      {props.children}
    </CartContext.Provider>
  );
};
