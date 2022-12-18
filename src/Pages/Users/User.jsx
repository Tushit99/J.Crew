import React, { useEffect, useState } from "react";
import auth from "./User.module.css";

const User = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("forgirls");
  const [type, setType] = useState("");
  const [iname, setIname] = useState("");
  const [img, setImg] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [textarea, settextarea] = useState("");

  useEffect(() => {
    async function detail(na) {
      let res = await fetch(`http://localhost:8080/${na}`);
      let x = await res.json();
      setData(x);
    }
    detail(name);
  }, [name]);

  const handleAdding = async () => {
    let obj = {
      id: Date.now(),
      name: { iname },
      image: { img },
      item: { item },
      rating: { rating },
      nprice: { price },
      price: `${price}`,
      productdescription: { textarea },
    }
    let res = await fetch(`http://localhost:8080/${type}`,
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json", }
      })
    let d = await res.json();
    console.log(d);
  };


  const handleDelete = async (dataName, dataid) => {
    let res = await fetch(`http://localhost:8080/${dataName}/${dataid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res); 
  } 

  return (
    <div className={auth.userhead}>
      <form onSubmit={handleAdding} className={auth.main1}>
        <input required type="text" placeholder="Product Name" value={iname} onChange={(e) => setIname(e.target.value)} />
        <input required type="text" placeholder="product IMG" value={img} onChange={(e) => setImg(e.target.value)} />
        <input required type="text" placeholder="Enter Item" value={item} onChange={(e) => setItem(e.target.value)} />
        <textarea
          required
          cols="30"
          rows="2"
          placeholder="Product description"
          value={textarea}
          onChange={(e) => settextarea(e.target.value)}
        ></textarea>
        <input required type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <select onChange={(e) => { setType(e.target.value) }}>
          <option value="formen"> Men </option>
          <option value="forwomen"> Women </option>
          <option value="forboys"> Boys </option>
          <option value="forgirls"> Girls </option>
        </select>
        <input required type="number" placeholder="Enter Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        <button type="submit" className={auth.adding}> Add data </button>
      </form>
      <div className={auth.main2} >
        <div className={auth.point}>
          <button onClick={() => setName("formen")}> Mens </button>
          <button onClick={() => setName("forwomen")}> Women </button>
          <button onClick={() => setName("forboys")}> Boys </button>
          <button onClick={() => setName("forgirls")}> Girls </button>
        </div>
        <div className={auth.append2}>
          {data.map((e) => (
            <div key={e.id}>
              <img src={e.image} alt="err" />
              <h2> {e.name} </h2>
              <p> Rating: {e.rating} </p>
              <p> Price: ₹{e.nprice} </p>
              <button onClick={()=>handleDelete(name,e.id)}> Delete </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
