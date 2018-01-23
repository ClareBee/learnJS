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
    let originalData = this.props.questions.questions;
    let duplicatesRemoved = uniqBy(originalData, 'topic');
    let advice = "";
    if(originalData.length < 3){
      advice = <p>Not enough questions - why not add some?</p>
    }else{
      advice = <p>Feature Coming Soon: Filter question by topic
        <br/>Click for multiple choice Q&A</p>
    }
    let topics = duplicatesRemoved.map((question) => {
      let url = `/topics/${question._id}`;
      return  <li className="topic-item" onClick={this.handleClick} value={question._id} key={question._id}>
                <NavLink to={url} key={question._id}><h3 className="capitalise">{question.topic}</h3></NavLink>
              </li>
    });

    return(
      <div>
        {advice}
        <ul className="topic-list">
          {topics}
        </ul>
      </div>
    );
  }
}

export default QuestionContainer;
