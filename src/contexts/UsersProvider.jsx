import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"

import UsersContext from './UsersContext';
 
const UsersProvider = ({children}) => {

  const [usersData, setUsersData] = useState("");
  const usersCollectionRef = collection(db, "users");

  useEffect(()=>{

    const fetchData = async () => {
      // READ THE DATA
      // SET THE USER LIST
      try{
        const data = await getDocs(usersCollectionRef);
        const filteredData = data.docs.map((doc) => (
          {
            ...doc.data(),
            id: doc.id
          }
        ))
        setUsersData(filteredData);
        console.log('data', filteredData)
      }  catch(err) {
        console.error(err);
      }
    }

    fetchData();
  },[]);

  return (
    <UsersContext.Provider value={{usersData}}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider