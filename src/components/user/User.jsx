import * as React from "react";
import Avatar from "../avatar/Avatar.jsx";
import styles from "./User.module.scss";
import classNames from "classnames";

export default function User({ name = "", info = "", avatar = "", size = 55, verified = false }) {

  return (
      <div className={classNames(styles.user)} width={size} height={size}>
         <div className="user_av">
         <Avatar url={avatar} size={size} verified={verified}/>
         </div>
         <div className="user_info">
          <div className={classNames(styles.name)}>{name}</div>
          <div className={classNames(styles.info)}>{info}</div>
          </div>
      </div>

  );
}
 