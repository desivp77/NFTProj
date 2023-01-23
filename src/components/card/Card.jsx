import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import millify from "millify";
import Countdown from './Countdown';
import Avatar from "../avatar/Avatar.jsx";
import styles from "./Card.module.scss";
import classNames from "classnames";
import { default as NFTCard } from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
 
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip"; 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import CircleIcon from "@mui/icons-material/Circle";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
      return <span>0:0:0</span>;
  } else {
      return (
          <span>
              {hours}:{minutes}:{seconds}
          </span>
      );
  }
};

export default function Card({    
    name = "",
    likes = 0,
    mediaUrl = "",
    user = { 
        avatar: { url: "" }, 
        verified: false 
           },
    price = "",
    currency = "",
    timeLeft = 0,
   }) {

  const { millify } = require("millify");
  const [time, setTime] = useState(timeLeft);

  useEffect(() => {
    if (timeLeft !== 0) {
        const interval = setInterval(() => setTime(0), time);
    }
}, []);

  const handleClick = () => {
    console.info("You gave a like!");
  };

  return (
    <NFTCard
    className={classNames(styles.card)} 
    sx={{
      maxWidth: 345,
      borderRadius: 0.5,
      backgroundColor:
          time === 0 ? "#181828" : "rgba(36, 242, 94, 0.1)",
  }}
  >

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
                <Avatar 
                className={classNames(styles.media)}
                url={user.avatar.url} 
                verified={user.verified}/>
            </Grid>

            <Grid item xs={12}>
            {time !== 0 ? (
                <div className={classNames(styles.badge)}>
                    <CircleIcon
                        sx={{
                            color: "#181828",
                            width: "1vw",
                            margin: "0 5px 0 0px",
                        }}
                    />
                    <p className={classNames(styles.badge_title)}>LIVE</p>
                </div>
            ) : null}
              <CardMedia
              className={classNames(styles.media)}
              component="img"
              height="194"
              image={mediaUrl}
              alt="NFT image"
              />
            {time !== 0 ? (
                <div className={classNames(styles.timer)}>
                    <Countdown
                        date={Date.now() + time}
                        renderer={renderer}
                    ></Countdown>
                </div>
            ) : null}
            </Grid>

            <Grid item xs={6}>
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                <h5 className={classNames(styles.title)}>{name}</h5>
                <p className={classNames(styles.price)}>{price} {currency}</p>
                </Typography>
                </CardContent>
            </Grid>

            <Grid item xs={6}>
                <Chip className={classNames(styles.likes)}
                icon={<FavoriteIcon />}
                label={millify(likes)}
                onClick={handleClick}
                variant="outlined"
                color="primary"
                sx={{
                  padding: 0.5, 
                  color: "#24f25e",
                  border: "3px solid #24f25e",
                  backgroundColor: "#232336",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "1rem",
                  lineHeight: "1rem",
              }}
                />
            </Grid>

          </Grid>
         </Box>
        </NFTCard>

  );
}
