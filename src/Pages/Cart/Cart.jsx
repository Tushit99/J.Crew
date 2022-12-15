import React, { useEffect, useState } from 'react'
import "./Cart.css"

const Cart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let x = JSON.parse(localStorage.getItem("cart2")) || [];
        setData(x);
        console.log(x);
    }, [])

    console.log(data);

    return (
        <div>
            <h4> Have a question? We can help. </h4>
            <div>
                <h4> Unfortunately, your order will not arrive by 12/24. </h4>
            </div>
            <div>
                <table>
                    <tr> 
                        <td> SHOPPING BAG (1)  </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <th> ITEM </th>
                        <th></th>
                        <th></th>
                    </tr>
                    {data.map((e) => (
                        <tr>
                            <th> <img src={e.image} alt="img" />  </th>
                            <th> <h3> {e.name} </h3>
                                <h4> Item: {e.item} </h4>
                                <h4> Rating: {e.rating} </h4>
                                <button> Remove </button>
                            </th>
                            <th>
                                INR: {e.price}
                            </th>
                        </tr>
                    ))}
                </table>
               
                <div>
                    <table>
                        <tr>
                            <th>Item Subtotal</th>
                            <tb>INR </tb>
                        </tr>
                        <tr>
                            <th> Estimated Total </th>
                            <td> INR </td>
                        </tr>
                    </table>
                    <p> Shipping calculated in Checkout </p>
                    <button> CHECKOUT </button>
                    <h3> Checkout with ESW </h3>
                    <p> By clicking 'Check Out Now', you will be redirected to the ESW checkout page where payment will be taken and your order fulfilled by ESW, J.Crew's preferred partner for international sales.</p>
                </div>
            </div>
        </div>
    )
}

export default Cart


