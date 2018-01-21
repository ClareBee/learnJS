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
      <DragDropContextProvider backend={HTML5Backend}>
        <React.Fragment>
          <Router data={this.state} />
        </React.Fragment>
      </DragDropContextProvider>
    );
  }
}

export default App;
