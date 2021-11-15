import React from "react";

// MUI
import * as theme from "../theme";
// Autre import de MUI de manière global
// import * as Mui from '@mui/material';

// Les actions du STORE sont contenus dans les PROPS
const Cards = (props) => {
  return (
    <div>
      <theme.Card>
        <theme.CardMedia component="img" height="230" image={props.data.url} />
        <theme.CardContent>
          <theme.Typography gutterBottom variant="h5" component="" color="black">
            {props.data.id}
          </theme.Typography>
          <theme.Typography variant="body2">
            <p>{props.data.content}</p>
          </theme.Typography>
        </theme.CardContent>
        <theme.CardActions>{/* <Stack spacing={2}></Stack> */}</theme.CardActions>
      </theme.Card>
    </div>
  );
};

export default Cards;
