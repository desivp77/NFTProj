import Paper from "@mui/material/Paper";
import Link from "../link/Link";
import styles from "./Avatar.module.scss";
import classNames from "classnames"; 
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 28,
  height: 28,
  marginLeft: '8px'
}));

const verified = "false";
// <MyComponent prop={verified} />

export default function Avatar1() {
  return (
    <div className='avatar'>
      <Badge className='badge'
        prop={verified}
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <SmallAvatar alt="Badge" src="/images/verified.svg" />
        }
      >
        <Avatar className='image'
          alt="Avatar Pic"
          src="/images/avatar.png"
          sx={{ width: 90, height: 90 }}
        />
      </Badge>
    </div>
  );
}
