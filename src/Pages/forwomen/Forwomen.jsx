import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import women from "./Forwomen.module.css";
import { CircularProgress } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Forwomen = () => {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true);
    async function detail(page) {
      let res = await fetch(
        `https://fiver-ox6s.onrender.com/forwomen?_page=${page}&_limit=9`
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
        `https://fiver-ox6s.onrender.com/forwomen?_page=${page}&_limit=9`
      );
      let x = await res.json();
      if (z === "asc") {
        x = x.sort((a, b) => { return a.nprice - b.nprice })
      }
      else if(z === "desc") {
        x = x.sort((a, b) => { return b.nprice - a.nprice })
      }
      console.log(x); 
      setData(x);
    }
    detail(sort);
    setLoading(false);
  }

  console.log(data);

  const rating = () => {
    setLoading(true);
    async function detail() {
      let res = await fetch(
        `https://fiver-ox6s.onrender.com/forwomen?_page=${page}&_limit=9`
      );
      let x = await res.json();
      x = x.sort((a, b) => { return b.rating - a.rating })
      console.log(x);
      setData(x);
      setLoading(false);
    }
    detail();
  }

  return (
    <div>
      {/* add to cart */} 
      <div className={women.boytop}>
        <h1> The Gift Guide </h1>
        <p>
          {" "}
          Great holiday presents are part of our heritage. Here's our 2022
          take...{" "}
        </p>
        <button className={women.top}> For Women </button>
      </div>
      <div className={women.sortbox}>
        <select onChange={(e) => sorted(e.target.value)} >
          <option value="">--</option>
          <option value="asc"> Low to High </option>
          <option value="desc"> High to Low </option>
        </select>
        <button onClick={() => rating()}> Top Rated </button>
      </div>
      <div className={women.datalist}>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress isIndeterminate value={30} color='blue.400' size='200px' />
          </div>) : (
          data.map((e) => (
            <Link to={`/forwomen/forwomen/${e.id}`} key={e.id}>
              <img src={e.image} alt="err" />
              <h2> {e.name} </h2>
              <p> Rating: {e.rating} </p>
              <p> Price: ₹{e.nprice} </p> 
            </Link>
          ))
        )}
      </div>
      <div className={women.pagination}>
        <button
          className={women.but}
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
          className={women.but}
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

export default Forwomen;
