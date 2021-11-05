import React from "react";
import { addToCart, getCarDescription } from "../redux/actions/DisplayAction";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "../styles/Display.css";
import { Link } from "react-router-dom";

function Display() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const [showCarDetails, setShowCarDetails] = useState(false);

  const [searchItem, setSearchItem] = useState("");

  console.log(state.cars);
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
        {/* <h1>joan</h1> */}
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
          .map((car) => (
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
              {/* <p>{car.carImage}</p> */}
              <p>Year of Production: {car.carYear}</p>
              <p>Price Offer: {car.carPrice}</p>
              <button
                className="addToCartButton"
                onClick={() => dispatch(addToCart(car.carId))}
              >
                ADD TO CART
              </button>

              {/* <CarDetails trigger = {showCarDetails} setTrigger = {setShowCarDetails}>

                      <Modal.Dialog>
                        <Modal.Header>
                          <Modal.Title>{car.carFuelType}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                          <p>{car.carTransmission}</p>
                          <p>{car.carEngineSize}</p>
                        </Modal.Body>

                        <Modal.Footer>
                          <Button variant="secondary">Close</Button>
                        </Modal.Footer>
                      </Modal.Dialog>
                    </CarDetails> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Display;
