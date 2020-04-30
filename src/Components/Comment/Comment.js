import React from 'react';
import {Avatar, Divider, Grid} from '@material-ui/core';

class Comment extends React.Component {
    render() {

        const commentStyle = {
          content: {
            textAlign: "left",
          },
          time:{
              color:"grey",
              textAlign: "left"
          },
          divider:{
              margin:"20px"
          }
          
        };

        return (
          <div>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt={this.props.comment.author} src="" />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4>{this.props.comment.author}</h4>
                <p style={commentStyle.content}>{this.props.comment.content}</p>
                <p style={commentStyle.time}>{this.props.comment.time}</p>
              </Grid>
            </Grid>
            <Divider variant="fullWidth" className="divider" style={commentStyle.divider} />
          </div>
        );
    }
}

export default Comment;