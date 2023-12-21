import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../contexts/UsersContext";
import { AuthContext } from "../contexts/AuthContext";

function MenuPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { listOfRestaurants } = useContext(UsersContext);
  const { userData } = useContext(AuthContext);

  const [restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    const currentRestaurant = listOfRestaurants.find((rest) => rest.id === id);
    if (currentRestaurant) {
      // useNavigate("/Error404");

      setRestaurant(currentRestaurant);

      if (currentRestaurant.menuItems) {
        setMenuItems(currentRestaurant.menuItems);
      }
    } else {
      navigate("/Error404");
    }
  }, []);

  console.log("restaurant", restaurant);

  return (
    <section className="pageSection">
      <h2>{restaurant.name} Menu</h2>

      <section className="itemsContainer">
        {menuItems.length === 0 && (
          <p>
            It appears that {restaurant.name} still did not add any food items
            to the menu.
          </p>
        )}
        {menuItems?.map((menuItem, index) => {
          const imageLink =
            menuItem.imageURL != null
              ? menuItem.imageURL
              : "https://www.clipartkey.com/mpngs/m/210-2101887_restaurant-symbol-png.png";

          return (
            <section key={index} className="item-card">
              <img src={menuItem.imageURL} alt="" />
              <h3>{menuItem.name}</h3>
              {userData?.role === "user" ? (
                <button className="add-to-cart-btn" type="button">
                  Add to Cart (${menuItem.price})
                </button>
              ) : (
                <p>${menuItem.price}</p>
              )}
              {/* <p>${menuItem.price}</p> */}
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default MenuPage;
