import React, {useState} from "react";
import {FormControl,TextField,FormHelperText,Button,Grid,Paper,Divider,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


//make Comment a functional component
const useStyles = makeStyles({
  content: {
    textAlign: "left",
    paddingLeft: "2rem"
  },
  author:{
    paddingLeft:"2rem"
  },
  time: {
    color: "grey",
    textAlign: "left",
  },
  divider: {
    margin: "20px",
  },
  paper: {
    padding: "40px 20px",
  }
});
      
const Comment = ({ author, content }) => (
  <div>
    <Grid container wrap="nowrap" spacing={2}>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 className={useStyles().author}>{author}</h4>
        <p className={useStyles().content}>{content}</p>
      </Grid>
    </Grid>
    <Divider variant="fullWidth" className={useStyles().divider}/>
  </div>
);

//create a useInput hook
const useInput = initialValue =>{
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
}

//make CommentForm a functional component
const CommentForm = ({addComment})=>{

  const { value:author, bind:bindAuthor, reset:resetAuthor } = useInput('');
  const { value: content, bind: bindContent, reset: resetContent } = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(author, content);
    resetAuthor();
    resetContent();

  }

  return (
    <Grid container spacing={2}>
      <FormControl color="primary" fullWidth="true" className="ml-2 mr-2">
        <TextField id="outlined-basic" label="Name" variant="outlined" className="mb-2" {...bindAuthor}/>
        <TextField id="outlined-basic" label="Add a comment" variant="outlined" multiline rowsMax={6} rows={4} {...bindContent}  />
        <FormHelperText id="my-helper-text"> We'll never share your personal information. </FormHelperText>
        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}> SUBMIT</Button>
      </FormControl>
    </Grid>
  );
}

//make CommentBox a functional componet
const CommentBox = ()=>{
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Fiona",
      content:
        "A review is an evaluation of a publication, service, or company such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, play, musical theater show, dance show, or art exhibition.",
    },
    {
      id: 2,
      author: "Dan",
      content:
        "A review is an evaluation of a publication, service, or company such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, play, musical theater show, dance show, or art exhibition.",
    }
  ]);

  const addComment = (author, content) =>{
    const newComment = {
      id:comments.length+1,
      author,
      content
    }
    const newComments = [...comments, newComment];
    setComments(newComments);
  }

  return (
    <div className="App ml-2 mr-2">
      <h1>Comments</h1>
      <CommentForm addComment={addComment} />
      <Paper className={useStyles().paper}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              author={comment.author}
              content={comment.content}
            />
          );
        })}
      </Paper>
    </div>
  );
}

export default CommentBox;


