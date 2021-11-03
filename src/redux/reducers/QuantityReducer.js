// import { useSelector } from 'react-redux'
import { cars } from '../../cars'
import { INCREMENT,DECREMENT } from "../types";

const initialState = {cars, cart: []};


const QuantityReducer = (state = initialState ,action) => {

    // 
    console.log('running reducer');

    switch(action.type){
        case INCREMENT:
            const items1 = state.cart.map(c => {
                if (c.id === action.id) {
                    c.quantity++
                }
                return c
            })
            
            return {
                ...state,
                cart: [...items1]
            }
        case DECREMENT:
            const items = state.cart.map(c => {
                if (c.id === action.id) {
                    c.quantity > 1 && c.quantity--
                }
                return c
            })
            return {
                ...state,
                cart: [...items]
            }
        default :
            return state 
    }
}

export default QuantityReducer;