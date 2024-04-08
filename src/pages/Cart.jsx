import CheckoutModal from "./components/CheckoutModal";
import cartImg from "./components/cart-img.svg";
import { useState } from "react";
import "./styles/cartStyle.css";

import minusImg from "./components/minus.svg";
import plusImg from "./components/plus.svg";

export default function Cart({
  cartArr,
  setCartArr,
  handleAddToCartClick,
  handleRemoveFromCartClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (cartArr.length === 0) {
    return <p className="empty">Cart is empty, you should buy something!</p>;
  }

  const handleCheckout = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cartDiv">
      <h2>Items in your cart:</h2>
      {cartArr.map((item) => (
        <div className="shopItem" key={item.id}>
          <p>{item.title}</p>
          <img src={item.image} alt={item.title} width="100px" />

          <div className="quantity-buttons">
            <button type="button" onClick={() => handleAddToCartClick(item)}>
              <img src={plusImg}></img>
            </button>
            <img src={cartImg} alt="cartPic" width="35px" />
            <p>{item.quantity}</p>
            <button
              type="button"
              onClick={() => handleRemoveFromCartClick(item)}
            >
              <img src={minusImg}></img>
            </button>
          </div>
        </div>
      ))}

      <div className="checkout">
        <button
          type="button"
          className="checkoutButton"
          onClick={handleCheckout}
        >
          Checkout Order
        </button>
      </div>

      {/* Render CheckoutModal based on isOpen state */}
      <CheckoutModal
        isOpen={isOpen}
        setCartArr={setCartArr}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
