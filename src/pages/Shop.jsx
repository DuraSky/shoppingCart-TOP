import { useLoaderData } from "react-router-dom";

export default function Shop() {
  const items = useLoaderData();

  return (
    <div>
      {items.map((item) => {
        return <p key={item.id}>{item.title}</p>;
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
