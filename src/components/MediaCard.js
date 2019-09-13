import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  let fetchData = () => {
    console.log(props);
  };
  return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require('./assets/card.png')}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.firstName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`${props.firstName}, berumur ${props.age}, dan saat ini ia bekerja di salah satu perusahaan indonesia yang terkenal. Email ${props.email}`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={fetchData} size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
  );
}
