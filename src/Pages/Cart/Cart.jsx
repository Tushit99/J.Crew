import React, { useEffect, useState } from 'react'
import "./Cart.css"

const Cart = () => {
    const [data, setData] = useState([]); 
    const [price, setPrice] = useState(0); 

    useEffect(() => {
        let x = JSON.parse(localStorage.getItem("cart2")) || [];
        setData(x);
        console.log(x); 
        let count = 0;  
        x.map((e)=>{
            count += e.nprice
        })
        setPrice(count); 
    }, [])

    const handleDelete = (i)=>{
        let z = JSON.parse(localStorage.getItem("cart2")) || [];
        z.splice(i,1); 
        localStorage.setItem("cart2",JSON.stringify(z)); 
        setData(z);   
        let count = 0;  
        z.map((e)=>{
            count += e.nprice
        })
        setPrice(count); 
    }

    console.log(data);

    return (
        <div className='cart'>
            <h4> Have a question? We can help. </h4>
            <div>
                <h4> Unfortunately, your order will not arrive by 12/24. </h4>
            </div>
            <div className='main' >
                <div>
                    <table>
                        <tr>
                            <th> SHOPPING BAG (1)  </th>
                            <th> </th>
                            <th> </th>
                        </tr>
                        <tr>
                            <td> ITEM </td>
                            <td> DETAIL </td>
                            <td> PRICE </td>
                        </tr>
                        {data.map((e,i) => (
                            <tr key={e.id}>
                                <td> <img src={e.image} alt="img" />  </td>
                                <td> <h3> {e.name} </h3>
                                    <h4> Item: {e.item} </h4>
                                    <h4> Rating: {e.rating} </h4>
                                    <button className='del' onClick={()=>{handleDelete(i)}}> Remove </button>
                                </td>
                                <th> 
                                    INR: {e.price}
                                </th>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className='box2'>
                    <table>
                        <tr>
                            <th>Item Subtotal</th>
                            <td>₹ {price} </td>
                        </tr>
                        <tr>
                            <th> delivery charges </th>
                            <td> ₹ 100 </td>
                        </tr>
                        <tr>
                            <th> Total </th>
                            <td> {price==0 ? 0 : `${price+100}`} </td>
                        </tr>
                    </table>
                    <p> Shipping calculated in Checkout </p>
                    <button> CHECKOUT </button>
                    <h3> Checkout with ESW </h3>
                    <p> By clicking 'Check Out Now', you will be redirected to the ESW checkout page where payment will be taken and your order fulfilled by ESW, J.Crew's preferred partner for international sales.</p>
                </div>
            </div> 
            <div className="bottomtotal">
                <h2>Total</h2>
                <h2> ₹{price == 0 ? 0 : `${price+100}`} </h2>
            </div>
        </div>
    )
}

export default Cart


