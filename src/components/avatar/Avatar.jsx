import * as React from "react";
import styles from "./Avatar.module.scss";
// import classNames from "classnames"; 
import { styled } from "@mui/material/styles";
 

// url,

export default function Avatar({ size = 90, sizeIcon = 28, verified = false }) {
  const url = "./images/avatar.png";

  return (

      // <div className={classNames(styles.avatar)} width={size} height={size}>
      <div className="avatar" width={size} height={size}>

            <img
                alt="avatar"
                src={url}
                width={size}
                height={size}
                // className={classNames(styles.image)}
                className="image"
            />
            <img
                alt="verified icon"
                src="/images/verified.svg"
                // className={classNames(styles.badge)}
                width={sizeIcon}
                height={sizeIcon}
                className="badge"
            />
        </div>
 
  );
}
 