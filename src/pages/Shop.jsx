import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Shop({ cartArr, setCartArr }) {
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

  const handleAddToCartClick = (item) => {
    setCartArr((prevCartArr) => [...prevCartArr, item]);
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="shopItem" key={item.id}>
            <p>{item.title}</p>
            <button
              type="button"
              onClick={() => handleAddToCartClick({ item })}
            >
              Add to Cart
            </button>
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

  return res.json();
};
