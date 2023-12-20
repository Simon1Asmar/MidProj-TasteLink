import React from 'react'

function RestaurantCard(props) {
  return (
    <section className="item-card">
      <img src={props.imgURL} alt="" />
      <p>{props.name}</p>
    </section>
  )
}

export default RestaurantCard