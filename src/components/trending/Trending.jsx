import * as React from "react"; 
import styles from "./Trending.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container"; 
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Card from "../card/Card.jsx";
 
export default function Trending({ cards = []}) {

  return (
    <div className={classNames(styles.trending_container)}>
    <Container maxWidth="xl">
    <Box display="flex" justifyContent="space-between">
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select label="This week" >
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
