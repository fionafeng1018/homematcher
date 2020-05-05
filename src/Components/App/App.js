import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchForm from '../SearchForm/SearchForm';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import CommentBox from '../CommentBox/CommentBox';

class App extends React.Component {

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h1>Find your Home</h1>
      </header>
      {/* <SearchBar/>
      <SearchForm/> */}
     <CommentBox/>
    </div>
  );
    }
}

export default App;
