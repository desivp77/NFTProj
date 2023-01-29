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
 
 
// You should implement a Material UI's Grid system for displaying the 4 Card components side by side
 
// The Trending component should accept a cards property however it should have a default property of an empty array
// The Trending component accept a cards property that follows the scheme shown below
// Note that this input is for your testing purposes and you should add the default property before submitting the solution

// You can see an example of how the Container component is used in the Example component
// You can use the image from public/images as a placeholder image

// export default function SelectSmall() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value);
//   };
// }



export default function Trending(
  {
    cards = [
       {
          name:"Ivy",
          user:{
             avatar:{
                "url":"images/avatar.png"
             },
             verified:true
          },
          mediaUrl:"images/nft.jpg",
          price: "1",
          currency:"ETH"
       },
       {
        name:"Ivy 2",
        user:{
           avatar:{
              "url":"images/avatar.png"
           },
           verified:true
        },
        mediaUrl:"images/nft.jpg",
        price: "1",
        currency:"ETH"
     },
     {
      name:"Ivy 3",
      user:{
         avatar:{
            "url":"images/avatar.png"
         },
         verified:true
      },
      mediaUrl:"images/nft.jpg",
      price: "1",
      currency:"ETH"
   },
   {
    name:"Ivy 4" ,
    user:{
       avatar:{
          "url":"images/avatar.png"
       },
       verified:true
    },
    mediaUrl:"images/nft.jpg",
    price: "1",
    currency:"ETH"
 },
    ]
 }
 
) {

  return (
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
  );
}
