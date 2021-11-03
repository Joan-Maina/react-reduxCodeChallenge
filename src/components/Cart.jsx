import React from 'react'
import '../styles/Cart.css'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

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
            < CartItem />
        </div>  
    )
}

export default Cart;