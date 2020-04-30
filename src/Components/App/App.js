import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchForm from '../SearchForm/SearchForm';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        {
          id: 1,
          author: "Fiona",
          content:
            "A review is an evaluation of a publication, service, or company such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, play, musical theater show, dance show, or art exhibition.",
          time: "20:05 April 23,2020",
        },
        {
          id: 2,
          author: "Dan",
          content:
            "A review is an evaluation of a publication, service, or company such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, play, musical theater show, dance show, or art exhibition.",
          time: "22:57 April 23,2020",
        },
      ],
    };
  }
  
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h1>Find Perfect Home</h1>
      </header>
      <SearchBar/>
      <SearchForm/>
      <CommentList comments={this.state.comments} />
    </div>
  );
    }
}

export default App;
