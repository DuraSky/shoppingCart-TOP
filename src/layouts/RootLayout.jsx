import { NavLink, Outlet } from "react-router-dom";
import "./RootLayoutStyle.css";

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
          <h1>SkyDeal</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">Cart {itemCount}</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
