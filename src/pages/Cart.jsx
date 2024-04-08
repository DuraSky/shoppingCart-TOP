import cartImg from "./components/cart-img.svg";

export default function Cart({
  cartArr,
  setCartArr,
  handleAddToCartClick,
  handleRemoveFromCartClick,
}) {
  if (cartArr.length === 0) {
    return <p>Cart is empty, you should buy something!</p>;
  }

  return (
    <div>
      <h2>Items in your cart:</h2>
      {cartArr.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.image} alt={item.title} width="100px" />

          <div className="quantity-buttons">
            <button type="button" onClick={() => handleAddToCartClick(item)}>
              +
            </button>
            <img src={cartImg} alt="cartPic" width="35px" />
            <p>{item.quantity}</p>
            <button
              type="button"
              onClick={() => handleRemoveFromCartClick(item)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
