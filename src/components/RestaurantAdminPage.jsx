import React from "react";

import { useContext } from "react";
import UsersContext from "../contexts/UsersContext";
import { AuthContext } from "../contexts/AuthContext";
import { useState } from "react";

function RestaurantAdminPage() {
  const { addMenuItemToRestaurant, createNewJob } = useContext(UsersContext);
  const { userData } = useContext(AuthContext);

  const [newItem, setNewItem] = useState({
    name: "",
    price: 0,
    imageURL: "",
  });

  const [newJob, setNewJob] = useState({
    jobTitle: "",
    datePosted: "",
    description: ""
  })

  return (
    <section className="pageSection">
      
      <section>
        <p>Add New Item</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            addMenuItemToRestaurant(userData.id, newItem);
          }}
        >
          <label htmlFor="name">
            {/* Name: */}
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              onChange={(e) => {
                setNewItem((prevValue) => ({
                  ...prevValue,
                  name: e.target.value,
                }));
              }}
            />
          </label>

          <label htmlFor="image-url">
            {/* Image (URL): */}
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="image URL"
              onChange={(e) => {
                setNewItem((prevValue) => ({
                  ...prevValue,
                  imageURL: e.target.value,
                }));
              }}
            />
          </label>

          <label htmlFor="price">
            {/* Price: */}
            <input
              type="number"
              name="price"
              id="price"
              min={0.0}
              placeholder="Price $"
              required
              onChange={(e) => {
                setNewItem((prevValue) => ({
                  ...prevValue,
                  price: e.target.value,
                }));
              }}
            />
          </label>

          <button type="submit">Add</button>
        </form>
      </section>

      <section>

      </section>

      <h3>COMING SOON</h3>
      <ul>
        <li>View Items</li>
        <li>Update Items</li>
        <li>Delete Items</li>
      </ul>

    </section>
  );
}

export default RestaurantAdminPage;
