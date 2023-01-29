import * as React from "react"; 
import styles from "./Auctions.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container"; 
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Card from "../card/Card.jsx";

//  +++     Create an Auctions component that uses the 4 Card components inside
// The Auctions component should receive a cards prop that receives an array of objects with this schema:
// {
//  "name": String,
//  "user": {
//     "avatar": String,
//     "verified": Boolean
//  },
//  "mediaUrl": String,
//  "price": String,
//  "currency": String,
//  "timeLeft": Number
// }
// +++     The default value of the cards prop must be an empty array
// +++     It should also have a heading with the text "Live Auctions" and a Select component from Material UI.

// Requirements
// +++     The Select component must be imported from @mui/material and used
// +++     You should implement a Material UI's Grid system for displaying the 4 Card components side by side
// You should also use the Material UI buttons and container.
// +++     You must use theContainer component from Material UI, as shown in the Example component
// The main difference between this component and the Trending component is that here the cards will be live
 
export default function Auctions({ cards = []}) {

  return (
    <div className={classNames(styles.trending_container)}>
    <Container maxWidth="xl">
    <Box display="flex" justifyContent="space-between">
    <h1 className={classNames(styles.header)}> 🔥 Live Auctions </h1>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select label="This week"  >
          <MenuItem value={10}>This week</MenuItem> 
        </Select>
      </FormControl>
    </Box>

    <Grid container spacing={2}>
         {cards.map((card) => (
          <Grid item xs={3} key={card.name}>
              <Card
                 name={card.name}
                 likes={1100}
                 mediaUrl={card.mediaUrl}
                 user={card.user}
                 price={card.price}
                 currency={card.currency}
                 />
           </Grid>
                    ))}
    </Grid>
    </Container>
    </div>
  );
}
