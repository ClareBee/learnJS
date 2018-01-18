import React from 'react';
import {NavLink }from 'react-router-dom';

class QuestionContainer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        chosenTopic: ""
      }
      this.handleClick = this.handleClick.bind(this);
    }

//gets index of item clicked
  handleClick(e){
  this.setState({
    chosenTopic: e.target.value
    });
  }



  render(){

    const questions = this.props.questions.questions.map((question, index) => {
      let url = `/topics/${index}`;
      return  <li onClick={this.handleClick} value={index}><NavLink to={url} key={index}>{question.topic}</NavLink></li>
    });

    return(
    <div>
      <ul>
        {questions}
      </ul>
    </div>
    );
  }
}

export default QuestionContainer;
