import { NavLink, Outlet } from "react-router-dom";
import "./RootLayoutStyle.css";

export default function RootLayout({ cartArr }) {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>SkyDeal</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">Cart {cartArr.length}</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
