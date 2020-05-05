import React from 'react';
import { FormControl, TextField, FormHelperText, Button, Grid } from "@material-ui/core";
import CommentBox from '../CommentBox/CommentBox';

class CommentForm extends React.Component{

    handleSubmit(event){
      event.preventDefault();
      this.props._addComment(this.author.value,this.content.value)
    }

    render(){
        return (
          <Grid container spacing={2}>
            <FormControl color="primary" fullWidth="true" className="ml-2 mr-2">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className="mb-2"
              />
              <TextField
                id="outlined-basic"
                label="Add a comment"
                variant="outlined"
                multiline
                rowsMax={6}
                rows={4}
              />
              <FormHelperText id="my-helper-text">
                We'll never share your personal information.
              </FormHelperText>
              <Button variant="contained" color="primary" onClick={this._addComment()}>
                SUBMIT
              </Button>
            </FormControl>
          </Grid>
        );
    }

}

export default CommentForm;