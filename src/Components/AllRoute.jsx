import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart/Cart";
import ErrorPage from "../Pages/Error/ErrorPage";
import Forboys from "../Pages/forboy/Forboys";
import Forgirl from "../Pages/forgirl/Forgirl";
import Formen from "../Pages/formen/Formen";
import Forwomen from "../Pages/forwomen/Forwomen";
import { Home } from "../Pages/index/Home";
import Payment from "../Pages/Payment/Payment";
import { Product } from "../Pages/productpage/Productdetail";
import Signin from "../Pages/Signup/Signin";
import Signup from "../Pages/Signup/Signup";
import User from "../Pages/Users/User";
import PrivateRoute from "./PrivateRoute";

const AllRoute = () => {
  return (
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/forboys" element={<Forboys />} />
      <Route path="/formen" element={<Formen />} />
      <Route path="/forwomen" element={<Forwomen />} />
      <Route path="/forgirl" element={<Forgirl />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/payment" element={<Payment />} /> 
      <Route path="/user" element={<User/>} />   
      <Route path="*" element={<ErrorPage />} />
      {/*  */} 
      <Route
        path="/forboys/:name/:id"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
      <Route
        path="/formen/:name/:id"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
      <Route
        path="/forwomen/:name/:id"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
      <Route 
        path="/forgirl/:name/:id"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoute;
