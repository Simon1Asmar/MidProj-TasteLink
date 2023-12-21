import React from "react";

import { MdFoodBank } from "react-icons/md";
import { TiHome as HomeIcon } from "react-icons/ti";
import { MdFastfood } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";


function BottomNavButton(props) {
  return (
    <div className="bottom-nav-btn">
      {props.page === "Home" && <HomeIcon className="icon" />}
      {props.page === "Cart" && <FaShoppingCart className="icon" />}
      {props.page === "Orders" && <MdDeliveryDining className="icon" />}
      {props.page === "Jobs" && <MdOutlineWork className="icon" />}
      {props.page === "Profile" && <FaUser className="icon" />}
      {props.page === "Menu" && <MdFastfood className="icon" />}
      {/* <p>{props.page}</p> */}
    </div>
  );
}

export default BottomNavButton;
