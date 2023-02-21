import React from 'react';
import "./card.css";

const Cards = (props) => {
  return (
    <div className='card rounded-2xl  sm:h-auto sm:w-auto'>
      <div className="card_body">
        <img src={props.img} alt="/" className=' w-29 h-26 rounded-2xl mx-auto'/>
        <h2 className='title text-center sm:h-auto sm:w-auto'>{props.title}</h2>
        <p className='price text-center sm:h-auto'>{props.cost}</p>
      </div>
    </div>
  )
}

export default Cards