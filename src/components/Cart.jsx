import React,{useEffect,useState} from 'react'
import '../styles/Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement} from '../redux/actions/QuantityAction'
import {removeFromCart} from '../redux/actions/DisplayAction'

function Cart() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [cartTotal, setCartTotal] = useState(0)
    const [discount, setDiscount] = useState(0)

    const calculateCartTotal = ()=>{
    const total = state.cart?.reduce((acc,value)=> acc +(value.carPrice * value.quantity), 0)
        setCartTotal(total)
        calculateDiscount()
    }

    const calculateDiscount = ()=>{
    const totalCars = state.cart?.reduce((acc,value)=> acc +value.quantity, 0)
        if(totalCars>=5){
        setDiscount(Math.floor(0.05*cartTotal))
        }else{
        setDiscount(0)
        }
    }

    useEffect(() => {
        calculateCartTotal()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.cart])


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
                    <p>
                        <button onClick={() => dispatch(increment(item.carId))}>  +</button>
                        {item.quantity}
                        <button onClick={() => dispatch(decrement(item.carId))}>  -</button>
                    </p>
                    <p>{item.carPrice}</p>
                    <p>{item.quantity * item.carPrice}</p>
                    <p>total</p>
                    <button className="removeItem" onClick={() => dispatch(removeFromCart(item.carId))}>X</button>
                </div>
            ))}
            <div className="cart-total-container">
                <div className="cart-total-container">
                    <h4 className="cart-total-item">
                        <span>Cart Price</span> <span>Ksh {cartTotal}</span>
                    </h4>
                    <h4 className="cart-total-item">
                        <span>Discount</span> <span>Ksh {discount}</span>
                    </h4>
                    <h4 className="cart-total-item">
                        <span>Total Price</span> <span>Ksh {cartTotal-discount}</span>
                    </h4>
                </div>
            </div>
        </div>  
    )
}

export default Cart;