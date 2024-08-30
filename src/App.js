import React, { useEffect, useState } from 'react'
import "./App.css"
import ImagePizza from "./pizza-img.jpg"
import ImageMinus from "./minus.png"
import ImagePlus from "./add.png"

function App() {

  const PRODUCT_PRICE = 350

  const [quantity, setQuantity] = useState(1);
  const [totalBill, setTotalBill] = useState(PRODUCT_PRICE)

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1)
    }
    else if (type === "minus" && quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  useEffect (()=>{

    const total = PRODUCT_PRICE * quantity 

    if(quantity < 5){
      setTotalBill( total )
    }
    else if(quantity>=5 && quantity <= 10){
      setTotalBill( total - 40 )
    }
    else{
      setTotalBill( total - 100)
    }
  }, [quantity])

  return (
    <div className='body-container'>
      <h1 className='heading'>Product Increament decreament Card</h1>
      <div className="card-container">
        <img src={ImagePizza} alt="Pizza" className="card-image" />
        <h2 className="card-title">Pizza</h2>
        <p className="card-description">
          Pizza is an Italian dish typically consisting of a flat base of
          leavened wheat-based dough topped with tomato, cheese, and other
          ingredients.
        </p>

        <div className='card-product-price'>
          <span className='card-price'>Price: ₹{PRODUCT_PRICE} </span>
          <span className='card-price-1'>Toatl: ₹{totalBill}</span>
        </div>

        <p className='card-error'>
          {quantity > 10 ? "For bulk orders, delivery time may vary": null}
        </p>

        <div className='card-quantity-conatainer'>
          <img
            src={ImageMinus}
            alt='Minus'
            className='card-quantity-symbol'
            onClick={() => {
              //setQuantity(quantity-1)
              updateQuantity("minus")
            }}
          />
          <span className='card-quantity'>{quantity}</span>

          <img
            src={ImagePlus}
            alt='Plus'
            className='card-quantity-symbol'
            onClick={() => {
              //setQuantity(quantity+1)
              updateQuantity("plus")
            }}
          />
        </div>

        <button className="card-btn">Buy Now</button>
      </div>
    </div>
  )
}

export default App