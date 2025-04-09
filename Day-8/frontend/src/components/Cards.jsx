import React from 'react'
import './Cards.css'
const Cards = (props) => {
  return (
    <div className='card'>
        <img src={props.img} />
        <h1>{props.username}</h1>
        <h2>{props.age},{props.city}</h2>
        <h5>{props.profession}</h5>
    </div>
  )
}

export default Cards