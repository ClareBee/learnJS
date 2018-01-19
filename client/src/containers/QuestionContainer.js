import React from 'react';
import {NavLink }from 'react-router-dom';
import uniqBy from 'lodash/uniqBy';

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
    const originalData = this.props.questions.questions;
    const duplicatesRemoved = uniqBy(originalData, 'topic');
    const questions = duplicatesRemoved.map((question, index) => {
      let url = `/topics/${index}`;
      return  <li className="topic-item" onClick={this.handleClick} value={index}><NavLink to={url} key={index}>{question.topic}</NavLink></li>
    });

    return(
    <div>
      <ul className="topic-list">
        {questions}
      </ul>
    </div>
    );
  }
}

export default QuestionContainer;
