import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import prod from "./product.module.css";

export const Product = () => {
  const { name, id } = useParams({});
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState(true); 

  useEffect(() => {
    async function getData() {
      const data = await fetch(`https://fiver-ox6s.onrender.com/${name}/${id}`).then(
        (d) => d.json()
      );
      setProduct(data);
    }
    getData();
  }, []);


  function timer(e) {
    setCart(false);
    let num = JSON.parse(localStorage.getItem("cart2")) || [];
    num.push(e);
    localStorage.setItem("cart2", JSON.stringify(num));
    setTimeout(() => {
      setCart(true);
    }, 1000);
  }

  console.log(product);
  console.log(id, name);

  return (
    <div>
      {cart ? <></> : (<div className={prod.carting}>
        <h1> Product Added to cart </h1>
      </div>)}
      <div className={prod.container}>
        <div className={prod.container}>
          <img
            src={product.image}
            className={prod.imgs}
            alt="some-thing-went-wrong"
          />
        </div>
        <div className={prod.containerdetail}>
          <h2> {product.name} </h2>
          <h5> {product.item} </h5>
          <h3>Price:{product.price}</h3>
          <br />
          <h4> Size: Select a Size </h4>
          <h3> All sizes are US size </h3>
          <div className={prod.btn}>
            <button> Small</button>
            <button> Medium </button>
            <button> Large </button>
            <button> X-Large </button>
            <button> XX-Large </button>
          </div>
          <h4>
            Quantity :
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </h4>
          <button
            className={prod.bag}
            onClick={() => {
              timer(product);
            }}
          >
            {" "}
            ADD TO BAG{" "}
          </button>
          <hr className={prod.hr} />
          <h4> Prices include duties and taxes </h4>
          <div> </div>
          <h2> Product Details </h2>
          <div className={prod.text}> {product.productdescription} </div>
          <ul>
            <li> Cotton.</li>
            <li> Short sleeves. </li>
            <li> Chest pocket. </li>
            <li> Side vents with tennis tail (slightly longer in back).</li>
            <li> Machine wash. </li>
            <li> Import. </li>
            <li> Select stores. </li>
            <li> Item AV961. </li>
          </ul>
          <h3> Our Fabrics, Re-imagined </h3>
          <h4 className={prod.fab}>
            {" "}
            This item contains a sustainable material, like organic cotton,
            recycled polyester, or with certifications like Fair Trade.{" "}
          </h4>
          <hr className={prod.hr} />
        </div>
      </div>
    </div>
  );
};
