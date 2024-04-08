import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Shop, { itemLoader } from "./pages/Shop";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import ShopFetchError from "./pages/ShopFetchError";

import "./pages/styles/mainStyle.css";

function App() {
  const [cartArr, setCartArr] = useState([]);

  const handleAddToCartClick = (clickedItem) => {
    // Check if the item is already in the cart
    const itemIndex = cartArr.findIndex((item) => item.id === clickedItem.id);

    // If item is in the cart, update its quantity
    if (itemIndex !== -1) {
      const updatedCart = cartArr.map((item, index) => {
        if (index === itemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartArr(updatedCart);
    } else {
      // If item is not in the cart, add it with quantity 1
      setCartArr((prevCartArr) => [
        ...prevCartArr,
        { ...clickedItem, quantity: 1 },
      ]);
    }
  };
  const handleRemoveFromCartClick = (clickedItem) => {
    const itemIndex = cartArr.findIndex((item) => item.id === clickedItem.id);

    if (itemIndex !== -1) {
      const updatedCart = cartArr.map((item, index) => {
        if (index === itemIndex) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      const filteredCart = updatedCart.filter((item) => item.quantity > 0);
      setCartArr(filteredCart);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout
            cartArr={cartArr}
            setCartArr={setCartArr}
            handleAddToCartClick={handleAddToCartClick}
            handleRemoveFromCartClick={handleRemoveFromCartClick}
          />
        }
      >
        <Route index path="/" element={<Home />} />
        <Route
          path="shop"
          element={
            <Shop
              cartArr={cartArr}
              setCartArr={setCartArr}
              handleAddToCartClick={handleAddToCartClick}
              handleRemoveFromCartClick={handleRemoveFromCartClick}
            />
          }
          loader={itemLoader}
          errorElement={<ShopFetchError />}
        />
        <Route
          path="cart"
          element={
            <Cart
              cartArr={cartArr}
              setCartArr={setCartArr}
              handleAddToCartClick={handleAddToCartClick}
              handleRemoveFromCartClick={handleRemoveFromCartClick}
            />
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Route>,
    ),
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
