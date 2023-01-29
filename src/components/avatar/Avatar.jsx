import * as React from "react";
import styles from "./Avatar.module.scss";
import { styled } from "@mui/material/styles";


export default function Avatar({ url, size = 90, sizeIcon = 28, verified = false }) {
 

  return (
      <div className="avatar" width={size} height={size}>

            <img
                alt="avatar"
                // src={url}
                src="/images/avatar.png"
                style={{width: 45, height: 45, borderRadius: 400/ 2}} 
                
                width={size}
                height={size}
                className="image"
            />
            <img
                alt="verified icon"
                src="/images/verified.svg"
                width={sizeIcon / 2}
                height={sizeIcon  / 2}
                className="badge"
            />
        </div>
 
  );
}
 