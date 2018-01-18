import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import QuestionContainer from './QuestionContainer';
import NewQuestionForm from '../components/NewQuestionForm';
import WelcomePage from './WelcomePage';
import Profile from '../components/Profile';
import Topic from '../components/Topic';
import NavBar from '../components/NavBar';

class Router extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={WelcomePage}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/new-question" component={NewQuestionForm} />
        {/* passes through props from App.js and spreads url params  */}
          <Route path="/topics" render={props => <QuestionContainer questions={this.props.data} />}/>
          <Route exact path="/topics/:id" render={props => <Topic {...props} data={this.props.data} />} />

        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;
