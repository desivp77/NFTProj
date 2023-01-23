import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import millify from "millify";

import Avatar from "../avatar/Avatar.jsx";
import styles from "./Card.module.scss";
import classNames from "classnames";
import { default as NFTCard } from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
 
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip"; 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import CircleIcon from "@mui/icons-material/Circle";

export default function Card({    
    name = "",
    likes = 0,
    mediaUrl = "",
    user = { 
        avatar: { url: "" }, 
        verified: false 
           },
    price = "",
    currency = "" }) {

  const { millify } = require("millify");

  const handleClick = () => {
    console.info("You gave a like!");
  };

  return (
    <NFTCard sx={{ maxWidth: 345 }} className={classNames(styles.card)}>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
                <Avatar 
                className={classNames(styles.media)}
                url={user.avatar.url} 
                verified={user.verified}/>
            </Grid>

            <Grid item xs={12}>
              <CardMedia
              className={classNames(styles.media)}
              component="img"
              height="194"
              image={mediaUrl}
              alt="NFT image"
              />
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
