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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout cartArr={cartArr} />}>
        <Route index path="/" element={<Home />} />
        <Route
          path="shop"
          element={<Shop cartArr={cartArr} setCartArr={setCartArr} />}
          loader={itemLoader}
          errorElement={<ShopFetchError />}
        />
        <Route
          path="cart"
          element={<Cart cartArr={cartArr} setCartArr={setCartArr} />}
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
