import React, { useState } from "react";
import {
  FormControl,
  TextField,
  FormHelperText,
  Button,
  Grid,
  Paper,
  Avatar,
  Divider,
} from "@material-ui/core";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

class Comment extends React.Component {
  render() {
    const commentStyle = {
      content: {
        textAlign: "left",
      },
      time: {
        color: "grey",
        textAlign: "left",
      },
      divider: {
        margin: "20px",
      },
    };

    return (
      <div>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt={this.props.author} src="" />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4>{this.props.author}</h4>
            <p style={commentStyle.content}>{this.props.content}</p>
            <p>{this.props.date}</p>
          </Grid>
        </Grid>
        <Divider
          variant="fullWidth"
          className="divider"
          style={commentStyle.divider}
        />
      </div>
    );
  }
}

class CommentForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let author = this._author;
    let content = this._content;
    this.props.addComment(author.value, content.value);
  }

  render() {
    return (
      <Grid container spacing={2}>
        <FormControl color="primary" fullWidth="true" className="ml-2 mr-2">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="mb-2"
            inputRef={(input) => (this._author = input)}
          />
          <TextField
            id="outlined-basic"
            label="Add a comment"
            variant="outlined"
            multiline
            rowsMax={6}
            rows={4}
            inputRef={(textField) => (this._content = textField)}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your personal information.
          </FormHelperText>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={this.handleSubmit.bind(this)}
          >
            SUBMIT
          </Button>
        </FormControl>
      </Grid>
    );
  }
}

export default class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: []
    };
  }

  componentDidMount(){
    axios
      .get("/posts")
      .then((response) => {
        console.log(response.data);
        this.setState({comments: response.data});
     
      })
      .catch((error) => console.log(error));
  }

  getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          key={comment.id}
          author={comment.author}
          content={comment.content}
          date={comment.date}
        />
      );
    });
  }

  addComment(author, content) {
    const comment = {
      id: this.state.comments.length + 1,
      author: author,
      content: content,
    };
    this.setState({
      comments: this.state.comments.concat([comment]),
    });
  }

  render() {
    const commentListStyle = {
      div: {
        padding: "14px",
      },
      paper: {
        padding: "40px 20px",
      },
    };
    return (
      <div style={commentListStyle.div} className="App">
        <h1>Comments</h1>
        <CommentForm addComment={this.addComment.bind(this)} />
        <Paper style={commentListStyle.paper}>{this.getComments()}</Paper>
      </div>
    );
  }
}
