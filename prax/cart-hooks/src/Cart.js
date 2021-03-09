import React from 'react';

import {CartContext} from './CartProvider'

export const Cart = () => {

    const cartAPI = React.useContext(CartContext);
    return (
        <div>
            <h3>items</h3>
            {cartAPI.cart.map(item => JSON.stringify(item))}
        </div>
    )
}