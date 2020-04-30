import React, { Component } from 'react';
import { Grid, Paper} from '@material-ui/core';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';



class CommentList extends React.Component{

    render() {
        const commentListStyle = {
          div: {
            padding: "14px",
          },
          paper: {
            padding: "40px 20px"
          },
        };
        return (
          <div style={commentListStyle.div} className="App">
            <h1>Comments</h1>
            <CommentForm />
            <Paper style={commentListStyle.paper}>
              {this.props.comments.map((comment) => {
                return <Comment comment={comment} key={comment.id} />;
              })}
            </Paper>
          </div>
        );
    }

}

export default CommentList;