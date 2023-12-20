import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { db } from "../config/firebase";
import { collection, getDocs, getDoc, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";

import UsersContext from "./UsersContext";

const UsersProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);
  const [listOfNormalUsers, setListOfNormalUsers] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const fetchData = async () => {
    // READ THE DATA
    // SET THE USER LIST
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsersData(filteredData);
      console.log("data", filteredData);
      populateLists(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const populateLists = (data) => {
    console.log("POPULATING LISTS");
    console.log(data);
    const normalUsers = data.filter((user) => {
      return user.role === "user";
    });
    setListOfNormalUsers(normalUsers);
    // console.log('normalUsers', normalUsers)

    const restaurants = data.filter((user) => {
      return user.role === "restaurant";
    });
    setListOfRestaurants(restaurants);
    // console.log('restaurants', restaurants)
  };

  const onCreateNewUser = async (role, uid, name) => {
    try {
      await addDoc(usersCollectionRef, {
        role: role,
        uid: uid,
        name: name,
      });

      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const findUserWithID = (uid) => {
    console.log("FINDING USER");
    const output = usersData.find((user) => {
      console.log(user, user.uid, uid);
      return user.uid === uid;
    });

    console.log("output", output);

    return output;
  };

  //adds menu item to a restaurant using the restaurant id
  const addMenuItemToRestaurant = async (id, newItem) => {
    const restaurantDoc = doc(db, "users", id);

    const restaurant = listOfRestaurants.find(rest => rest.id === id);

    const existingMenuItems = (restaurant && restaurant.menuItems) || [];

    const menuItems = Array.isArray(existingMenuItems) ? existingMenuItems : [];

    menuItems.push(newItem);

    console.log('restaurantDoc', restaurantDoc);

    await updateDoc(restaurantDoc, { menuItems: menuItems });
  }
  /*const addMenuItemToRestaurant = async (id, newItem) => {
    try {

      // const restaurantDoc = doc(db, "users", id);

      const userRef = doc(usersCollectionRef, id);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();

        // Check if menuItems array exists, if not, create it
        const menuItems = userData.menuItems || [];

        menuItems.push(newItem);

        await updateDoc(userRef, {
          menuItems: menuItems,
        });

        fetchData();
      } else {
        console.error('User not found');
      }
    } catch (err) {
      console.error(err);
    }
  };*/

  return (
    <UsersContext.Provider
      value={{
        usersData,
        onCreateNewUser,
        findUserWithID,
        listOfRestaurants,
        listOfNormalUsers,
        addMenuItemToRestaurant,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
