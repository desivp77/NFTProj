import * as React from "react";
import styles from "./Avatar.module.scss";
import { styled } from "@mui/material/styles";


export default function Avatar({ url, size = 90, sizeIcon = 28, verified = false }) {

  return (
      <div className="avatar" width={size} height={size}>

            <img
                alt="avatar"
                src={url}
                width={size}
                height={size}
                className="image"
            />
            <img
                alt="verified icon"
                src="/images/verified.svg"
                width={sizeIcon}
                height={sizeIcon}
                className="badge"
            />
        </div>
 
  );
}
 