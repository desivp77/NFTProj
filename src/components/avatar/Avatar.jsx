import * as React from "react";
import styles from "./Avatar.module.scss";
import classNames from "classnames"; 
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Image from 'next/image';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 28,
  height: 28,
  marginLeft: '8px'
}));


export default function Avatar1({ url, size = 90, verified = false }) {
  return (
    <div className={classNames(styles.avatar)} width={size} height={size}>
        <Avatar 
          className={classNames(styles.image)}
          alt="Avatar Pic"
          src={url}
          width={size}
          height={size}
          sx={{ width: 90, height: 90 }}
        />
      <Badge 
        // prop={verified}
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <SmallAvatar 
          className={classNames(styles.badge)} 
          alt="Badge" 
          src="/images/verified.svg" />
        }>
      </Badge>


    </div>
  );
}
