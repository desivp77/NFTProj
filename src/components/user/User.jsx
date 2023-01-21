import * as React from "react";
import Avatar from "../avatar/Avatar.jsx";
import styles from "./User.module.scss";
import classNames from "classnames";

// ++ The component must have a prop named name with a default value of an empty string
// ++ The component must have a prop named info with a default value of an empty string
// ++ The component must have a prop named avatar with a default value of an empty string
//  +++        The component must have a prop named size with a default value of 55
//  +++        The component must have a prop named verified with a default value of false

// +++        The component must have a container div with a css class user 
// +++        The component must have used the Avatar component

// ++ The component must have an element with the css class name which renders the user's name
// ++ The component must have an element with the css class info which renders the user's info
// +++        The component must have an a css module named User.module.scss
// +++        The component must use the colors variables from the styles/colors folder
// The component must use rem as sizing units for the texts
 

export default function User({ name = "", info = "", avatar = "", size = 55, verified = false }) {

  return (
      <div className="user" width={size} height={size}>
         <div className="user_av">
         <Avatar url={avatar} size={size} verified={verified}/>
         </div>
         <div className="user_info">
          <div className="name">{name}</div>
          <div className="info">{info}</div>
          </div>
      </div>

  );
}
 