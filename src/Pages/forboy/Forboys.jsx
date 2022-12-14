import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import "./Forboy.css";
import { CircularProgress } from '@chakra-ui/react'

const Forboys = () => {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function detail(page) {
      let res = await fetch(
        `http://localhost:8080/forboys?_page=${page}&_limit=9`
      );
      let x = await res.json();
      setData(x);
    }
    detail(page);
    setLoading(false);
  }, [page]);

  console.log(data);

  function timer(e) {
    setCart(false);
    let num = JSON.parse(localStorage.getItem("cart2")) || [];
    num.push(e);
    localStorage.setItem("cart2", JSON.stringify(num));
    setTimeout(() => {
      setCart(true);
    }, 1000);
  }

  return (
    <div>
      {/* add to cart */}
      <div className={cart ? "cartadd2" : "cartadd"}>
        <h1> Product Added to cart </h1>
      </div>
      <div className="boytop">
        <h1> The Gift Guide </h1>
        <p>
          {" "}
          Great holiday presents are part of our heritage. Here's our 2022
          take...{" "}
        </p>
        <button className="top"> For Boys </button>
      </div>
      <div className="datalist">
        {loading ? (
          <CircularProgress isIndeterminate value={30} color='blue.400' size='200px' />
        ) : (
          data.map((e) => (
            <div key={e.id}>
              <img src={e.image} alt="err" />
              <h2> {e.name} </h2>
              <p> Rating: {e.rating} </p>
              <p> Price: ₹{e.price} </p>
              <button
                className="but"
                onClick={() => {
                  timer(e);
                }}
              >
                {" "}
                Add to Cart{" "}
              </button>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        <button
          className="but"
          disabled={page === 1}
          onClick={() => {
            setpage((p) => {
              return p - 1;
            });
          }}
        >
          {" "}
          <ArrowLeftIcon /> PREV{" "}
        </button>
        <button> {page} </button>
        <button
          className="but"
          disabled={page === 3}
          onClick={() => {
            setpage((p) => {
              return p + 1;
            });
          }}
        >
          {" "}
          NEXT <ArrowRightIcon />{" "}
        </button>
      </div>
    </div>
  );
};

export default Forboys;
