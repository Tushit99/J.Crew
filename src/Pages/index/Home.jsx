import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel"; 
// import { Footer } from "../footer/footer"

export const Home=()=>{
  return (
    <div className="Container">
      <Banner>
        <img src="https://i.imgur.com/b58QpQo.png" alt="" />
      </Banner> 
      <GridImgs>
        <img src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img1_new.jpg" alt="j1" />
        <img src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img2_new.jpg" alt="j2" />
        <img src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img3.jpg" alt="j3" />
        <img src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img4.jpg" alt="j4" />
        <img src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img5.jpg" alt="j5" />
        <img src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img6.jpg" alt="j6" />
      </GridImgs>
      <Buttons>
        <h1>Shop New Arrivals</h1> 
        <button>Shop Women</button>
        <button>Shop Men</button>
        <button>Shop Girls</button>
        <button>Shop Boys</button>
      </Buttons>
      <PinkDiv>
        <img
          className="logo-p"
          src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic"
          alt=""
        />
        <div className="d-mid">
          <div className="d-card">
            <img
              src="https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_w_img12.jpg"
              alt=""
            />
            <p>Creative Spirits Series</p> 
            <h1>Marie Marot X J.Crew</h1>
            <button>Shop our collab</button>
          </div>
          <div className="d-card">
            <img
              src="https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_w_img7.jpg"
              alt=""
            />
            <p>That fall feeling</p>
            <h1> Layer love with Marjon Carlos </h1> 
            <button>Shop our collab</button>
          </div>
          <div className="d-card">
            <img
              src="https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_w_img8.jpg"
              alt=""
            />
            <p>Heritage made modern</p>
            <h1>A Cashmere Remix with Lucy Williams</h1>
            <button>Shop our collab</button>
          </div>
        </div>
        <div className="moreStories">
          <h1>More Stories</h1>
          <div className="flex">
            <div className="card">
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img11.jpg"
                alt=""
              />
              <h3>The edit:sunny outlook</h3>
              <button>Shop the color story</button>
            </div>
            <div className="card">
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img12.jpg"
                alt=""
              />
              <h3>Most wanted: the Cadiz rope tote</h3>
              <button>See why we’re obsessed</button>
            </div>
            <div className="card">
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img13_new.jpg"
                alt=""
              />
              <h3>The edit: block-print paradise</h3>
              <button>Shop the print focus</button>
            </div>
            <div className="card">
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img14.jpg"
                alt=""
              />
              <h3>Design Try-ons: The April Collection</h3>
              <button>Shop the video</button>
            </div>
          </div>
        </div>
      </PinkDiv>
      <Carousel /> 
      <More>
        <h2>More you need to see</h2>
        <div className="card-con">
          <div className="m-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/BH290_BL8486_m?wid=416"
              alt=""
            />
            <button>Shop Women's Dresses & Jumpsuits</button>
          </div>
          <div className="m-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/AY671_BK0001?wid=416"
              alt=""
            />
            <button>Shop Women's Shirts & Tops</button>
          </div>
          <div className="m-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/BG652_SU8788_m?wid=416"
              alt=""
            />
            <button>Shop Women's Sweaters</button>
          </div>
          <div className="m-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/AW770_OR5787_m?wid=416"
              alt=""
            />
            <button>Shop Women's The Tees Shop</button>
          </div>
          <div className="m-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/BL371_BL8133_m?wid=416"
              alt=""
            />
            <button>Shop Women's Sweatshirts</button>
          </div>
          <div className="m-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/BC108_BL8133_m?wid=416"
              alt=""
            />
            <button>Shop Women's Swimwear</button>
          </div>
        </div>
      </More>
      {/* <Footer/>   */}
    </div>
  );
}

const Banner = styled.div`
  width: 95%;
  /* border:1px solid; */
  margin: auto;
  /* border: 1px solid red; */
  img {
    cursor: pointer;
    margin: auto;
    width: 100%;
  }
`;

const GridImgs = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  margin-top: 50px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
const Buttons = styled.div`
  h1 {
    font-weight: lighter;
  }
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "EB Garamond", serif;
  /* border: 1px solid red; */
  margin-top: 30px;

  /* margin-left: 20%; */
  button {
    border: 1px solid black;
    background-color: white;
    height: 40px;
    width: 140px;
    font-size: 15px;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    font-family: "DM Sans", sans-serif;
    letter-spacing: 1px;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`;

const PinkDiv = styled.div`
  width: 85%;
  background-color: #e7c9c1;
  margin: auto;
  margin-top: 40px;
  padding-bottom: 50px;
  .logo-p {
    margin: auto;
    width: 180px;
    margin-top: 50px;
  }
  .flex {
    display: flex;
    text-align: start;
    justify-content: space-around;
    /* border: 1px solid white; */
    width: 100%;
    margin: auto;
  }
  .d-mid {
    display: flex;
    justify-content: space-around;
    width: 80%;
    /* border: 1px solid black; */
    margin: auto;
    margin-top: 50px;
  }
  .d-card {
    width: 30%;
    /* width: 75%; */
    margin: auto;
    text-align: start;

    & h1 {
      font-family: "EB Garamond", serif;
      font-weight: lighter;
    }
  }
  .d-card img {
    width: 100%;
  }
  .d-card button {
    border: none;
    background: transparent;
    border-bottom: 2px solid black;
    font-size: 13px;
    font-family: "DM Sans", sans-serif;
    font-weight: bold;
    cursor: pointer;
  }
  .moreStories {
    margin: auto;
    /* border: 1px solid red; */
    text-align: start;
    width: 80%;
    margin-top: 100px;
    /* margin-bottom: 50px; */
    & h1 {
      font-family: "EB Garamond", serif;
      font-weight: lighter;
      margin-left: 15px;
      font-size: 50px;
    }
  }
  .card {
    width: 22%;
    font-family: "EB Garamond", serif;
    margin-top: -25px;
    /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
    & h3 {
      font-weight: lighter;
      font-size: 18px;
    }
    & button {
      border: none;
      background: transparent;
      border-bottom: 2px solid black;
      font-size: 13px;
      font-family: "DM Sans", sans-serif;
      font-weight: bold;
      /* width: 170px; */
      text-align: start;
      cursor: pointer;
    }
  }
  .card img {
    width: 100%;
  }
`;
const More = styled.div`
  width: 95%;
  padding-top: 20px;
  /* border: 1px solid black; */
  margin: auto;
  h2 {
    font-family: "EB Garamond", serif;
    font-weight: lighter;
    font-size: 30px;
  }
  & button {
    border: none;
    background: transparent;
    border-bottom: 2px solid black;
    font-size: 13px;
    font-family: "DM Sans", sans-serif;
    font-weight: bold;
    /* width: 170px; */
    text-align: start;
    cursor: pointer;
    font-size: 11px;
  }

  .card-con {
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    /* border: 1px solid red; */
  }
  .m-card {
    width: 15%;
    cursor: pointer;
  }
  .m-card img {
    width: 100%;
  }
`;


