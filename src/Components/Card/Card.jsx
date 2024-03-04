import React from 'react'
import './Card.css'

export const Card = ({img,title,description,route}) => {
  return (
    <div className='container'>
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={route}>Go to Project</a>
    </div>
 )
}
