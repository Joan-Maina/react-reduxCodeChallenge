import { useSelector } from 'react-redux'


const QuantityReducer = (action) => {

    const state = useSelector(state => state)
    console.log('running reducer');

    switch(action.type){
        case 'INCREMENT':
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
        case 'DECREMENT':
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