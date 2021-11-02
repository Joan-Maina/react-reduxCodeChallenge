import { DISPLAY_DESCRIPTION, ADD_TO_CART ,SEARCH_CARS} from '../types'
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