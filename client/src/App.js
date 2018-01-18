import React, { Component } from 'react';
import './App.css';
import Router from "./containers/Router";

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
    return (
      <React.Fragment>
        <Router data={this.state} />
      </React.Fragment>
    );
  }
}

export default App;
