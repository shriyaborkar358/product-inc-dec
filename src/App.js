import React from 'react'
import "./App.css"
import ImagePizza from "./pizza-img.jpg"
import ImageMinus from "./minus.png"
import ImagePlus from "./add.png"

function App() {
  return (
    <div className='body-container'>
      <h1 className='heading'>Product Increament decreament Card</h1>
    <div className="card-container">
      <img src={ImagePizza} alt="Pizza" className="card-image" />
      <h2 className="card-title">Pizza</h2>
      <p className="card-description">
        Pizza is an Italian dish typically consisting of a flat base of
        leavened wheat-based dough topped with tomato, cheese, and other
        ingredients, baked at a high temperature, traditionally in a
        wood-fired oven
      </p>

      <p className='card-price'>Price: ₹350</p>

      <div className='card-quantity-conatainer'>
        <img src={ImageMinus} alt='Minus' className='card-quantity-symbol'/>
        <span className='card-quantity'>1</span>
        <img src={ImagePlus} alt='Plus' className='card-quantity-symbol'/>
      </div>

      <button className="card-btn">Buy Now</button>
    </div>
  </div>
  )
}

export default App