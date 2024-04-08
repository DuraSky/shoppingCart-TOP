import "./styles/homeStyle.css";
import shopImg from "./components/shop-img.jpg";

export default function Home() {
  return (
    <div className="home-content">
      <h1>Welcome to our shop</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum
        quidem rerum facilis est et expedita distinctio. Integer malesuada.
        Mauris tincidunt sem sed arcu. Phasellus faucibus molestie nisl. Duis
        ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Integer
        imperdiet lectus quis justo. Nunc dapibus tortor vel mi dapibus
        sollicitudin. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nunc dapibus tortor vel mi dapibus
        sollicitudin. Aliquam erat volutpat. Fusce consectetuer risus a nunc.
        Aenean id metus id velit ullamcorper pulvinar. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Aenean
        vel massa quis mauris vehicula lacinia. Morbi scelerisque luctus velit.
        Integer tempor. Praesent vitae arcu tempor neque lacinia pretium.
      </p>

      <p>
        Nullam sit amet magna in magna gravida vehicula. Maecenas libero. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Aenean
        vel massa quis mauris vehicula lacinia. Sed vel lectus. Donec odio
        tempus molestie, porttitor ut, iaculis quis, sem. Praesent id justo in
        neque elementum ultrices. Cras pede libero, dapibus nec, pretium sit
        amet, tempor quis. Proin pede metus, vulputate nec, fermentum fringilla,
        vehicula vitae, justo. Proin mattis lacinia justo. Curabitur vitae diam
        non enim vestibulum interdum. Nullam sapien sem, ornare ac, nonummy non,
        lobortis a enim.
      </p>

      <img src={shopImg} alt="storefront image"></img>
    </div>
  );
}
