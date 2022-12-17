import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TheamContext } from "../../Context/TheamContext";
import "./product.css";

export const Product = () => {
  const { name, id } = useParams({});
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState(true);
  const {back} = useContext(TheamContext); 

  useEffect(() => {
    async function getData() {
      const data = await fetch(`http://localhost:8080/${name}/${id}`).then(
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
    <div className={back ? "wht" : "bak"}>
      <div className={cart ? "cartadd2" : "cartadd"}>
        <h1> Product Added to cart </h1>
      </div>
      <div className="container">
        <div className="container-img">
          <img
            src={product.image}
            className="pro-img"
            alt="some-thing-went-wrong"
          />
        </div>
        <div className="container-detail">
          <h2> {product.name} </h2>
          <h5> {product.item} </h5>
          <h3>Price:{product.price}</h3>
          <br />
          <h4> Size: Select a Size </h4>
          <h3> All sizes are US size </h3>
          <div className="btn">
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
            className="bag"
            onClick={() => {
              timer(product);
            }}
          >
            {" "}
            ADD TO BAG{" "}
          </button>
          <hr className="hr" />
          <h4> Prices include duties and taxes </h4>
          <div> </div>
          <h2> Product Details </h2>
          <div className="text"> {product.productdescription} </div>
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
          <h4 className="fab">
            {" "}
            This item contains a sustainable material, like organic cotton,
            recycled polyester, or with certifications like Fair Trade.{" "}
          </h4>
          <hr className="hr" />
        </div>
      </div>
    </div>
  );
};
