import React, { useState } from "react";
import "./ShoppingCart.css";

export const ShoppingCart: React.FC = () => {
  const [shoppingCartOpen, setShoppingCartOpen] = useState<boolean>(false);
  const toggleShoppingCart = () => {
    setShoppingCartOpen(!shoppingCartOpen);
  };
  return (
    <div>
      <button
        className="shopping-button, logo"
        onClick={() => toggleShoppingCart()}
      >
        shopping logo
      </button>

      {shoppingCartOpen && ( // its uqual with if this is true do that
        <div className="shopping-container">
          <p>your order</p>
          <p>some details,some details,some details</p>
          <p>total:</p>
        </div>
      )}
    </div>
  );
};
