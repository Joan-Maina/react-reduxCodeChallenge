import { DISPLAY_DESCRIPTION, ADD_TO_CART , INCREMENT , DECREMENT, SEARCH_CARS, REMOVE_FROM_CART} from '../types'
import { cars } from '../../cars'


const initialState = {cars, cart: []};

const displayDescription = (state = initialState , action) => {
    switch(action.type){
        case ADD_TO_CART:
            const itemInCart = state.cart.find(c => c.carId === action.payload);
            const item = state.cars.find(car => car.carId === action.payload)
            if(itemInCart) return state
            console.log(state.cart)
            return{
                ...state,
                cart:[...state.cart, {...item, quantity:1}]
            }
            case INCREMENT:
                const items1 = state.cart.map(c => {
                    if (c.carId === action.id) {
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
                    if (c.carId === action.id) {
                        c.quantity > 1 && c.quantity--
                    }
                    return c
                })
                return {
                    ...state,
                    cart: [...items]
                }
            case REMOVE_FROM_CART:
                const filteredCart = state.cart.filter(c => c.carId !== action.payload);
                return { ...state, cart: [...filteredCart] }


    // case SEARCH_CARS:
    //         return {
    //             ...state,
    //             cars: [...state.todos.filter(({id}) => id !== action.id)]
    //         }    
        default:
            return state

    }
}

export  default displayDescription