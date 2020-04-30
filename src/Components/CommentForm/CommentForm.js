import React from 'react';
import { FormControl, TextField, FormHelperText, Button, Grid } from "@material-ui/core";

class CommentForm extends React.Component{

    constructor(){
        super();

        this.state ={
            comment:""
        }
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
              <Button variant="contained" color="primary">
                SUBMIT
              </Button>
            </FormControl>
          </Grid>
        );
    }

}

export default CommentForm;