import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: []
    }
  }


  componentDidMount() {
    const url = "/questions";
    fetch(url)
    .then(function(response) {
    if(response.ok){
      console.log("success");
      return response.json();
    }
    throw new Error("Network response wasn't ok");
    })
    .then(data => {
    this.setState({questions: data});
    })
    .catch(function(error){
    console.log(error.message);
    });
  }


  render() {
    console.log(this.state.questions);
    return (
      <div className="App">
        <p>This is the app.js in react</p>
        <h1>Users</h1>
        {this.state.questions.map(question =>
          <div>{question.question}</div>
        )}
      </div>
    );
  }
}

export default App;
