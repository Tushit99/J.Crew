import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import paym from "./Payment.module.css";

const Payment = () => {
    const [data, setData] = useState({}); 
    const [box, setBox] = useState(false);  
    const nav = useNavigate(); 

    useEffect(() => {
        let x = JSON.parse(localStorage.getItem("payment"));
        setData(x);
    }, []); 

    const Purchase =()=>{  
        setBox(true); 
        localStorage.parse("cart2",JSON.stringify({})); 
        setTimeout(()=>{  
            setBox(false);  
        },2000) 
        nav("/"); 
    }

    return ( 
        <div className={paym.payment}>
            <div className={paym.a1}>
                <h2 className={paym.address}> Delivery Address</h2>
                <input type="text" required placeholder="Enter Name" />
                <div>
                    <input type="text" required placeholder="Address Line 1" />
                    <p> Start typing a street address or postcode </p>
                </div>
                <input type="number" required placeholder="Pin Code" />
                <h2>
                    <input type="checkbox" /> Save this address from my next purchase
                </h2>
                <input type="text" required placeholder="Enter City" />
                <input type="number" required placeholder="Enter Number" />
                <div className={paym.infobox}>
                    <input type="checkbox" />
                    <p>
                        I have read and consent to ESW processing my information in
                        accordance with the
                        <span
                            style={{
                                textDecoration: "underline",
                                margin: "0 5px",
                                fontWeight: "bold",
                            }}
                        >
                            Privacy Statement
                        </span>
                        and
                        <span
                            style={{
                                textDecoration: "underline",
                                margin: "0 5px",
                                fontWeight: "bold",
                            }}
                        >
                            Cookie Policy.
                        </span>
                    </p>
                </div>
                <button className={paym.paybut} onClick={Purchase} > CONTINUE TO PAYMENT </button>
            </div>
            {/* box2 */}
            <div className={paym.a2}>
                <button className={paym.cartbox}> <Link to="/cart">  BACK TO CART </Link> </button>
                <h2> J.CREW an American multi-brand </h2>
                <table>
                    <tr>
                        <td> Total Items </td>
                        <td> {data.quantity} </td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td> ₹{data.price} </td>
                    </tr>

                    <tr>
                        <td> Delivery Charge </td>
                        <td> 100 </td> 
                    </tr>
                    <tr>
                        <th> TOTAL </th>
                        <th> ₹{data.price + 100} </th>
                    </tr>
                </table>
                <h2 className={paym.itsale}> Final Sale </h2>
                <button id="viewbt" > <Link>  VIEW MORE </Link> </button>
            </div>
            {box ? (
                <div className={paym.success}>
                <h1> Purchase is Successful </h1>
            </div> 
             ):("")} 
        </div> 
    );
};

export default Payment;
