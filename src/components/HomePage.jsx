import React from "react";

import { useContext } from "react";
import UsersContext from "../contexts/UsersContext";
import RestaurantCard from "./RestaurantCard";

const HomePage = () => {
  const { listOfRestaurants } = useContext(UsersContext);

  return (
    <section className="pageSection">
      {/* <div>HomePage</div> */}
      <h2>Available Restaurants</h2>
      <section className="itemsContainer">
        {listOfRestaurants.map((restaurant) => {
          
          const imageLink = restaurant.imageURL != null ? restaurant.imageURL : "https://www.clipartkey.com/mpngs/m/210-2101887_restaurant-symbol-png.png";

          return(
          
          <RestaurantCard key={restaurant.uid} imgURL={imageLink} name={restaurant.name} />
          // <p>{restaurant.name}</p>
        )})}
      </section>
    </section>
  );
};

export default HomePage;
