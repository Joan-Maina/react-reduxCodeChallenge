import React from 'react'
import '../styles/Cart.css'

function Cart() {
    return (
      <div className="cartItems">
          <div className="labels">
              <p>ITEM</p>
              <p>QUANTITY</p>
              <p>DISCOUNT</p>
              <p>GRAND-TOTAL</p>
              <p>TOTAL</p>
          </div>
          <div className="calculationDiv">
              {/* <img src=""> */}
              <p>item</p>
              <input type="number"></input>
              <p>discount</p>
              <p>grand-total</p>
              <p>total</p>
              <button className="removeItem">X</button>
          </div>
      </div>  
    )
}

export default Cart;
