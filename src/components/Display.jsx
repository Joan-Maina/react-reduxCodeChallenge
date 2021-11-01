
import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import '../styles/Display.css'
import passat from '../images/passat1.JPG'

function Display() {


    const state = useSelector(state => state);

     const [showCarDetails, setShowCarDetails] = useState(false);

     const [searchItem, setSearchItem] = useState('');

    return (
        <div >
          <div className="search">
            <input type='text' placeholder="Search.." onChange={(event)=>{
              setSearchItem(event.target.value)
            }}></input>
            <button><i class="fa fa-search-plus" aria-hidden="true"></i></button>
            </div>
            <div className="main-container">
            {/* <h1>joan</h1> */}
            {state.filter((car) => {
              if(searchItem == ''){
                return car
              }else if(car.carMake.toLowerCase().includes(searchItem.toLowerCase())){
                return car;
              }}).map(car => (
                <div key = {car.carId} className="singleCar">
                   <p className="carMake">Make: {car.carMake}</p>
                    <img src={passat} className="carImage" alt={car.carMake} onClick = {() => setShowCarDetails(!showCarDetails)}/>
                    <p>Mileage:{car.carMileage}</p>
                   
                    <p>Year of Production: {car.carYear}</p>
                    <p>Price Offer: {car.carPrice}</p>
                    <button className="addToCartButton">ADD TO CART</button>
                   
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
              
            ) )}
            </div>
        </div>
    )
}

export default Display
