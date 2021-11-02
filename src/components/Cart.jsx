import React from 'react'
import '../styles/Cart.css'
import { useSelector } from 'react-redux'

function Cart() {

    const state = useSelector(state => state)

    return (
        <div className="cartItems">
            <div className="labels">
                <p>ITEM</p>
                <p>QUANTITY</p>
                <p>PRICE</p>
                <p>GRAND-TOTAL</p>
                <p>TOTAL</p>
            </div>
            {state?.cart.map(item => (       
                <div key={item.carId} className="calculationDiv">
                    {/* <img src=""> */}
                    <p>{item.carMake}</p>
                    <input type="number"></input>
                    <p>{item.carPrice}</p>
                    <p>{item.quantity * item.carPrice}</p>
                    <p>total</p>
                    <button className="removeItem">X</button>
                </div>
            ))}
        </div>  
    )
}

export default Cart;