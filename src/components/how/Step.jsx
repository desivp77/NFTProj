import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import millify from "millify"; 
import Avatar from "../avatar/Avatar.jsx";
import styles from "./How.module.scss";
import classNames from "classnames";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// You must create a Step component (in the src/components/how folder) that represents an info card and must receive the following props:
// {
//  "number":"Number",
//  "title":"String",
//  "description":"String"
// }

export default function Step({    
    number = "1",
    title = "Step 1", 
    description = "Bllalalal",
   }) {


  return (
 
    <Card sx={{ display: "flex", boxShadow: "none" }}>
      <Grid container spacing={2} key={step.description}> 
      <Grid item xs={2} >
          <Box
            sx={{
              flex: "6 0 auto",
              display: "flex",
              flexDirection: "column",
              width: "30%",
              borderRadius: "30px 0px 0px 30px",
              backgroundColor: "#4E24F2"
            }}
          >
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              sx={{
                padding: "40px",
                textAlign: "center",
                color: "#fff",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "3rem",
                lineHeight: "3rem"
              }}
            >
              1
            </Typography>
          </CardContent>
        </Box>
      </Grid>

    <Grid item xs={2}>
      <CardContent
        sx={{
          flex: "12 0 auto",
          backgroundColor: "#181828",
          flex: "6 0 auto",
          display: "flex",
          flexDirection: "column",
          width: "60%",
          borderRadius: "0px 30px 30px 0px "
        }}
      >
        <Typography
          component="div"
          variant="h5"
          sx={{
            padding: "20px 0 0 20px",
            textAlign: "left",
            color: "#fff",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "1.3rem",
            lineHeight: "1.3rem"
          }}
        >
          Live From Space
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          sx={{
            padding: "20px",
            textAlign: "left",
            color: "#fff",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "0.8rem",
            lineHeight: "1rem"
          }}
        >
          Mac Miller Live From SpaceLive From SpaceLive From SpaceLive From
          SpaceLive From SpaceLive From SpaceLive From SpaceLive From Space
        </Typography>
      </CardContent>
    </Grid>
    </Grid>
  </Card>

  );
}
