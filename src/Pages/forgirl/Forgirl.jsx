import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import "./Forgirl.css";
import { CircularProgress } from '@chakra-ui/react'

const Forgirl = () => {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function detail(page) {
      let res = await fetch(
        `http://localhost:8080/forgirls?_page=${page}&_limit=9`
      );
      let x = await res.json();
      setData(x);
    }
    detail(page);
    setLoading(false);
  }, [page]);

  function sorted(sort) {
    setLoading(true);
    async function detail(z) {
      let res = await fetch(
        `http://localhost:8080/forgirls?_page=${page}&_limit=9`
      );
      let x = await res.json();
      if (z == "asc") {
        x = x.sort((a, b) => { return a.nprice - b.nprice })
      }
      else if (z == "desc") {
        x = x.sort((a, b) => { return b.nprice - a.nprice })
      }
      console.log(x);
      setData(x);
    }
    detail(sort);
    setLoading(false);
  }

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

  const rating = () => {
    setLoading(true);
    async function detail() {
      let res = await fetch(
        `http://localhost:8080/forgirls?_page=${page}&_limit=9`
      );
      let x = await res.json();
      x = x.sort((a, b) => { return b.rating - a.rating })
      console.log(x);
      setData(x);
    }
    detail();
    setLoading(false);
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
        <button className="top"> For Mens </button>
      </div>
      <div className="sortbox">
        <select onChange={(e) => sorted(e.target.value)} >
          <option value="">--</option>
          <option value="asc"> Low to High </option>
          <option value="desc"> High to Low </option>
        </select>
        <button onClick={() => rating()}> Top Rated </button>
      </div>
      <div className="datalist">
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <h1>
              <CircularProgress value={30} isIndeterminate size='200px' />
              Loading...
            </h1>
          </div>) : ( 
          data.map((e) => (
            <div key={e.id}>
              <img src={e.image} alt="err" />
              <h2> {e.name} </h2>
              <p> Rating: {e.rating} </p>
              <p> Price: ₹{e.nprice} </p>
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

export default Forgirl;
