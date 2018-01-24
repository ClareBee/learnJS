import React, { Component } from 'react';
import './App.css';
import Router from "./containers/Router";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { DragDropContextProvider } from 'react-dnd';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: []
    }
    this.apiRequest = this.apiRequest.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  apiRequest(){
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

  handleUpdate(){
    this.apiRequest();
  }

  componentDidMount() {
    this.apiRequest();
  }

  render() {
    return (
        <React.Fragment>
          <Router data={this.state} onUpdate={this.handleUpdate}/>
        </React.Fragment>
    );
  }
}

export default App;
