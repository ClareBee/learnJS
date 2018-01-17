import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {questions: []}

  componentDidMount() {
    fetch('/questions')
      .then(res => res.json())
      .then(questions => this.setState({ questions }));
  }

  render() {
    console.log(this.state.questions);
    return (
      <div className="App">
        <p>This is the app.js in react</p>
        <h1>Users</h1>
        {this.state.questions.map(question =>
          <div key={question._id}>{question.question}</div>
        )}
      </div>
    );
  }
}

export default App;
