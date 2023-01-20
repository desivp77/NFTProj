import * as React from "react";
import styles from "./Avatar.module.scss";
import classNames from "classnames"; 
import { styled } from "@mui/material/styles";


export default function Avatar1({ url, size = 90, verified = false }) {
  return (


      <div className={classNames(styles.avatar)} width={size} height={size}>
            <img
                alt="avatar"
                src={url}
                width={size}
                height={size}
                className={classNames(styles.image)}
            />
            <img
                alt="verified icon"
                src="../images/verified.svg"
                className={classNames(styles.badge)}
                width={size / 4}
                height={size / 4}
            />
        </div>
 
  );
}
