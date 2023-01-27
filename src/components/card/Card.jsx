import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";
import millify from "millify";
import Countdown from "react-countdown";
import { default as MuiCard } from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Favorite from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CircleIcon from "@mui/icons-material/Circle";
import Avatar from "../avatar/Avatar";
import Chip from "@mui/material/Chip"; 


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
        avatarUrl: "", 
        verified: false },
    price = "",
    currency = "",
    timeLeft = 0,
}) {
    const [time, setTime] = useState(timeLeft);

    useEffect(() => {
        if (timeLeft !== 0) {
            const interval = setInterval(() => setTime(0), time);
        }
    }, []);

    return (
        <MuiCard  
            className={classNames(styles.badge, styles.card)}
 
            sx={{
                maxWidth: 325,
                borderRadius: 0.5,
                backgroundColor:
                    time === 0 ? "#0c0c14" : "rgba(36, 242, 94, 0.1)",
            }}
        >
            <CardHeader
                sx={{ paddingLeft: 0 }}
                avatar={
                    <Avatar
                        url={user.avatarUrl}
                        size={33}
                        verified={user.verified}
                    />
                }
                title=""
                subheader=""
            />
            {time !== 0 ? (
                <div>
                    <CircleIcon
                        sx={{
                            color: "#181828",
                            width: "1vw",
                            margin: "0 5px 0 0px",
                        }}
                    />
                    <p className={classNames(styles.badge_text)}>LIVE</p>
                </div>
            ) : null}
            <CardMedia
                className={classNames(styles.media)}
                component="img"
                height="286"
                image={mediaUrl}
                alt="nft"
            />
            {time !== 0 ? (
                <div className={classNames(styles.timer)}>
                    <Countdown
                        date={Date.now() + time}
                        renderer={renderer}
                    ></Countdown>
                </div>
            ) : null}
            <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} justifyContent="flex-start">
                            <h5 className={classNames(styles.title)}>{name}</h5>
                            <p className={classNames(styles.price)}>
                                {price} {currency}
                            </p>
                        </Grid>
                        <Grid item xs={6} justifyContent="flex-end">
                            <div className={classNames(styles.likes)}>
                                <Chip className={classNames(styles.likes)}
                                    startIcon={<Favorite />}
                                    label={millify(likes)} 
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
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </MuiCard>
    );
}
