import React from "react";

// MUI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Les actions du STORE sont contenus dans les PROPS
const Cards = (props) => {
  return (
    <div className="card">
      <Card>
        <CardMedia component="img" height="230" image={props.data.url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="black">
            {props.data.id}
          </Typography>
          <Typography variant="body2">
            <p>{props.data.content}</p>
          </Typography>
        </CardContent>
        <CardActions>{/* <Stack spacing={2}></Stack> */}</CardActions>
      </Card>
    </div>
  );
};

export default Cards;
