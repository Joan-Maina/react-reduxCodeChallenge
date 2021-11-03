import React from 'react'

import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement} from '../redux/actions/QuantityAction'

// export function Cart() {
//     return useSelector((state) => state.cart)
//   }

//   const { cart  } = Cart()
//   console.log(cart)

export const CartItem = () => {
    const state = useSelector(state => state.cart)
    const dispatch = useDispatch();


    return (
        <div>
        {state?.map(item => (       
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
        </div>
    )
    
}