import React from "react";
import { Link } from "react-router-dom";

function RestaurantCard(props) {
  return (
    <Link to={`/menu/${props.id}`}>
      <section className="item-card">
        <img src={props.imgURL} alt="" />
        <p>{props.name}</p>
      </section>
    </Link>
  );
}

export default RestaurantCard;
