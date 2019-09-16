import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { yellow, red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 350
  },
  media: {
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: yellow[500]
  },
  btn: {
    backgroundColor: red[300],
    color: "white"
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card onClick className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={props.name}
        subheader={props.email}
      />
      {/* <CardMedia
        className={classes.media}
        image="./assets/card.png"
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          i'm a website developer at {props.company.name}, i live in{" "}
          {props.address.city},{props.address.zipcode}, i like to code and learn
          new technologies
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete button">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="update button">
          <EditIcon />
        </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Button variant="contained" className={classes.btn} >DETAILS</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Additional:</Typography>
          <Typography paragraph>Phonenumber :{props.phone}</Typography>
          <Typography paragraph>Website : {props.website}</Typography>
          <Typography paragraph>
            Street address at {props.address.street}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
