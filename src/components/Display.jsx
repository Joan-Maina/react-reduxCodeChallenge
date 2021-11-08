import React from "react";
import { addToCart, getCarDescription } from "../redux/actions/DisplayAction";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "../styles/Display.css";
import { Link } from "react-router-dom";
import {increment,decrement} from '../redux/actions/QuantityAction'

function Display() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  //const cartItems = useSelector((state) => state.cart);

  const [showCarDetails, setShowCarDetails] = useState(false);

  const [searchItem, setSearchItem] = useState("");

  
  return (
    <div className="display">
      <div className="search">
        <input
          type="text"
          placeholder="Search.."
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
        ></input>

        <button>
          <i class="fa fa-search-plus" aria-hidden="true"></i>
        </button>
      </div>
      <div className="main-container">
     
       
        {state.cars
          .filter((car) => {
            if (searchItem == "") {
              return car;
            } else if (
              car.carMake.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return car;
            }
          })
          .map((car) => {

            const inCart =state.cart.find( (item) => item.carId === car.carId);
            console.log(inCart)

            return(
              <div key={car.carId} className="singleCar">
              <p className="carMake">Make: {car.carMake}</p>
              <Link to="description">
                <img
                  src={car.carImage}
                  className="carImage"
                  alt={car.carMake}
                  onClick={() => dispatch(getCarDescription(car.carId))}
                />
              </Link>
              <p>Mileage:{car.carMileage}</p>

              <p>Year of Production: {car.carYear}</p>
              <p>Price Offer: {car.carPrice}</p>
              {!inCart ? <button
                className="addToCartButton"
                onClick={() => dispatch(addToCart(car.carId))}
              >
                ADD TO CART
              </button> : <div>
                <button onClick={() => dispatch(increment(car.carId))}>  +</button>
                                  {state.cart.quantity}
                <button onClick={() => dispatch(decrement(car.carId))}>  -</button>
                </div>}
            </div>
            )           
            
})}
      </div>
    </div>
  );
}

export default Display;

