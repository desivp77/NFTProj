import * as React from "react"; 
import styles from "./How.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container"; 
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Step from "./Step.jsx";
 
 
// The How component must receive the following props:
// {
//  "description":"String",
//  "title":"String",
//  "items":[
//     {
//        "title":"String",
//        "description":"String"
//     }
//  ],
//  "link":"String"
// }

// The items prop must have a default value of an empty array.
// You must pass the link prop's value of the How component to the href prop of the "Learn more" button.
// You must use the Button component from @mui/material.
// Each item from the items array represents one info card's content, you have to map each item to a Step component.
// For both the How and Step components you must use the Grid component from Material UI
// You must set the opacity of 10% on the numbers on each Step component. Use the rgba function.
 
export default function How({ steps = [
{
 description:"String",
title:"String",
 items:[
    {
       title :"String",
       description:"String"
    }
 ],
 link:"String"
}
]}) {

  return (
    <div className={classNames(styles.trending_container)}>
    <Container maxWidth="xl">
    <Box display="flex" justifyContent="space-between">
    <h1 className={classNames(styles.header)}> How it works </h1>
    <p className={classNames(styles.header)}> Text here </p> 
    </Box>

    <Grid container spacing={2}>
         {steps.map((step) => (
          <Grid item xs={3} key={step.description}>
              <Step
                 description={step.description}
                 likes={1100}
                 mediaUrl={step.mediaUrl}
                 user={step.user}
                 price={step.price}
                 currency={step.currency}
                 />
           </Grid>
                    ))}
    </Grid>
    </Container>
    </div>
  );
}
