import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>SkyDeal</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">Cart</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
