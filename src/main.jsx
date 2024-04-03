import React from "react";
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
import ShoppingCart from "./pages/ShoppingCart";
import ErrorPage from "./pages/ErrorPage";
import ShoptFetchError from "./pages/ShopFetchError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Home />} />
      <Route
        path="shop"
        element={<Shop />}
        loader={itemLoader}
        errorElement={<ShoptFetchError />}
      />
      <Route path="cart" element={<ShoppingCart />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
