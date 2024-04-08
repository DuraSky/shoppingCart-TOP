import { NavLink, Outlet } from "react-router-dom";
import "./RootLayoutStyle.css";
import storefront from "../pages/components/storefront.svg";

export default function RootLayout({
  cartArr,
  setCartArr,
  handleAddToCartClick,
  handleRemoveFromCartClick,
}) {
  const itemCount = cartArr.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="root-layout">
      <header>
        <nav>
          <div className="logo">
            <h1>SkyDeal</h1>
            <img src={storefront} alt="storefront" />
          </div>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="shop">Shop</NavLink>
            <NavLink to="cart">
              <p className="cartQuantity">
                Cart
                <span>{itemCount}</span>
              </p>
            </NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
