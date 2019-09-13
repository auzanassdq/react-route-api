import React, { Component } from "react";
import axios from "axios";
import MediaCard from "./MediaCard";
import { Grid } from "@material-ui/core";


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }

  fetchData = async () => {
    let res = await axios.get("http://localhost:3000/members");
    console.log(res.data);

    this.setState({
      listData: res.data
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {this.state.listData.map(d => (
              <MediaCard firstName={d.firstName} age={d.age} email={d.email} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
