import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

import { db } from "../config/firebase"
import { collection, getDocs, addDoc } from "firebase/firestore"

import UsersContext from './UsersContext';
 
const UsersProvider = ({children}) => {

  const [usersData, setUsersData] = useState("");
  const usersCollectionRef = collection(db, "users");

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

  useEffect(()=>{
    fetchData();
  },[]);

  const onCreateNewUser = async (role, uid, name) => {
    try {

      await addDoc(usersCollectionRef, {
        "role": role,
        uid: uid,
        name: name
      });

      fetchData();


    } catch (err) {
      console.error(err);
    }
  }

  const findUserWithID = (uid) => {
    console.log("FINDING USER");
    const output = usersData.find((user)=>{
      console.log(user, user.uid, uid);
      return user.uid === uid;
    })
    
    console.log('output', output)

    return output;
    
  }

  return (
    <UsersContext.Provider value={{usersData, onCreateNewUser, findUserWithID}}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider