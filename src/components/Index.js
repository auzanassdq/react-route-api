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
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({
      listData: res.data
    });
    console.log(this.state.listData);
  };

  deleteData = async id => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  postData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: "title goes here",
        body: "Body message"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  putData = async () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
      method: "PUT",
      body: JSON.stringify({
        userId: 1,
        id: 5,
        title: "hello task",
        completed: "hello body"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

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
                id={data.id}
                key={index}
                dataBody={data.body}
                dataTitle={data.title}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
