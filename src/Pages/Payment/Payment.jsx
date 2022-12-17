import React from "react";
import "./Payment.css"

const Payment = () => {
    return (
        <div className="main"> 
            <div className="d1">
                <h2> Delivery Address</h2>
                <input type="text" placeholder="Enter Name" />
                <div>
                    <input type="text" placeholder="Address Line 1" />
                    <p> Start typing a street address or postcode </p>
                </div>
                <input type="number" placeholder="Pin Code" />
                <h2> 
                    <input type="checkbox" /> Save this address from my next purchase
                </h2>
                <input type="text" placeholder="Enter City" />
                <input type="text" placeholder="Enter Number" />
                <div>
                    <input type="checkbox" />
                    <p> 
                        I have read and consent to ESW processing my information in
                        accordance with the
                        <span style={{ textDecoration: "underline" }}>
                            Privacy Statement
                        </span>
                        and
                        <span style={{ textDecoration: "underline" }}>
                            Cookie Policy
                        </span>
                    </p>
                </div>
            </div>
            {/* box2 */}
            <div className="d2">
                <button className="cart"> BACK TO CART </button>
                <table>
                    <tr>
                        <td> Quantity: </td>
                        <td> qua </td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td> ₹price </td>
                    </tr>
                </table>
                <h2> Final Sale </h2>
                <button> VIEW MORE </button>
                <br />
                <hr />
                <br />
                <table>
                    <tr>
                        <td> Items </td>
                        <td> INR </td>
                    </tr>
                    <tr>
                        <td> Delivery </td>
                        <td> INR </td>
                    </tr>
                    <tr>
                        <th> TOTAL </th>
                        <th> INR </th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Payment;
