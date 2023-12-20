import React from "react";
import UsersContext from "../contexts/UsersContext";
import { useContext } from "react";

function UsersTemporaryComponent() {
  const { usersData } = useContext(UsersContext);
  console.log("data 2", usersData);
  return (
    <>
      <div>UsersTemporaryComponent</div>
      <p>ss</p>
    </>
  );
}

export default UsersTemporaryComponent;
