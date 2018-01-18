import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import QuestionContainer from './QuestionContainer';
import WelcomePage from './WelcomePage';
import NavBar from '../components/NavBar';

class Router extends React.Component {
  render(){
    console.log(this.props.data);
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={WelcomePage}/>
          <Route path="/topics" render={() => <QuestionContainer data={this.props.data}/>}/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;
