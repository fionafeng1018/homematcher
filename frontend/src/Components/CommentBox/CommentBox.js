import React, {useState, useEffect} from "react";
import {FormControl,TextField,FormHelperText,Button,Grid,Paper,Divider,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';


//make Comment a functional component
const useStyles = makeStyles({
  content: {
    textAlign: "left",
    paddingLeft: "2rem",
  },
  author: {
    paddingLeft: "2rem",
  },
  time: {
    color: "grey",
    textAlign: "left",
    paddingLeft: "2rem"
  },
  divider: {
    margin: "20px",
  },
  paper: {
    padding: "40px 20px",
  },
});
      
const Comment = ({ author, content, date }) => (
  <div>
    <Grid container wrap="nowrap" spacing={2}>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 className={useStyles().author}>{author}</h4>
        <p className={useStyles().content}>{content}</p>
        <p className={useStyles().time}>{date}</p>
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
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    axios
      .get("/posts")
      .then((response) => {
        setComments(response.data);
      })
      .catch(error=>console.log(error));
  },[]);//The useEffect hook takes two arguments, a function and a list of dependencies. If the function or the dependencies change, the function is called.
  //this hook will only run when the component initializes. It won't run any other time because it doesn't have any dependencies to watch.
  //Using an empty array provides almost the same functionality as the componentDidMount() lifecycle method from a class component.

  const mapComment = (comments)=>{  
    return comments.map(comment=>{
      return (
        <Comment
          key={comment.id}
          author={comment.author}
          content={comment.content}
          date={comment.date}
        />
      );
    })
  }

  const addComment = (author, content, date) =>{
    const newComment = {
      id:comments.length+1,
      author,
      content,
      date
    }
    const newComments = [...comments, newComment];
    setComments(newComments);
  }

  return (
    <div className="App ml-2 mr-2">
      <h1>Comments</h1>
      <CommentForm addComment={addComment} />
      <Paper className={useStyles().paper}>{mapComment(comments)}</Paper>
    </div>
  );
}

export default CommentBox;

