import * as React from "react"; 
import styles from "./Trending.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Card from "../card/Card.jsx";
 

// export default function SelectSmall() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value);
//   };
// }

export default function Trending({ cards = []}) {

  return (
    <div className={classNames(styles.trending_container)}>
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="space-between">
        <h1 className={classNames(styles.header)}>Trending</h1>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">This week</InputLabel>
          <Select sx={{ width: "200px", borderRadius: "10px", }} >
            <MenuItem value={1}>This week</MenuItem> 
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
