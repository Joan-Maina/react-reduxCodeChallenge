import { DISPLAY_DESCRIPTION, ADD_TO_CART, SEARCH_CARS ,REMOVE_FROM_CART} from '../types'

export const displayDescription = () => {
    return {
        type: DISPLAY_DESCRIPTION
    }
}

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const searchCar = (searchItem) => {
    return {
        type: SEARCH_CARS,
        searchItem
    }

}
export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }

}