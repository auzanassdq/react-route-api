import React, { Component } from "react";
import axios from "axios";
import MediaCard from "./MediaCard";
import { Grid } from "@material-ui/core";


export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }

  fetchData = async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({
      listData: res.data
    });
  };

  deleteData = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  handleDetails = (id) => {
    alert("NOT IMPLEMENTED YET SORRY")
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {this.state.listData.map((data, index) => (
              <MediaCard
                delete={this.deleteData}
                details = {this.handleDetails}
                id={data.id}
                key={index}
                name={data.name}
                email={data.email}
                phone={data.phone}
                website={data.website}
                address={data.address}
                company={data.company}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
