import React from 'react'

import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement} from '../redux/actions/QuantityAction'

export const CartItem = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    console.log(state.cart)

    return (
        <>
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
                    <button className="removeItem">X</button>
                    </div>
            ))}
        </>
    )
    
}