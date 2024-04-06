import { useRouteError, Link } from "react-router-dom";

export default function ShopFetchError() {
  const error = useRouteError();

  return (
    <div className="shop-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
}
