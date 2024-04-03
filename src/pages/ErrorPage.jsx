import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <p>
        Wrong page fool, go back <NavLink to="/">Home</NavLink>
      </p>
    </div>
  );
}
