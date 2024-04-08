import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import cartImg from "./components/cart-img.svg";
import minusImg from "./components/minus.svg";
import plusImg from "./components/plus.svg";

import "./styles/shopStyle.css";

export default function Shop({
  cartArr,
  setCartArr,
  handleAddToCartClick,
  handleRemoveFromCartClick,
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const items = useLoaderData();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await itemLoader();
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    console.log("Cart updated:", cartArr);
  }, [cartArr]);

  if (loading) return <p className="loading-data">Loading...</p>;
  if (error) return <p className="error-data">Error: {error.message}</p>;

  return (
    <div className="allItems">
      {items.map((item) => {
        const cartItem = cartArr.find((cartItem) => cartItem.id === item.id);
        const cartQuantity = cartItem ? cartItem.quantity : 0;
        return (
          <div className="shopItem" key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} width="100px"></img>

            <div className="quantity-buttons">
              <button type="button" onClick={() => handleAddToCartClick(item)}>
                <img src={plusImg}></img>
              </button>
              <img src={cartImg} alt="cartPic" width="35px" />
              <p>{cartQuantity}</p>
              <button
                type="button"
                onClick={() => handleRemoveFromCartClick(item)}
              >
                <img src={minusImg}></img>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const itemLoader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw Error("Could not fetch shop items");
  }

  const data = await res.json();

  // Modify each item to include a quantity field initialized to 0
  const modifiedData = data.map((item) => ({ ...item, quantity: 0 }));

  return modifiedData;
};
