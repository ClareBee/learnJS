import React from 'react';
import MultipleChoice from './MultipleChoice';

class Topic extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const questions = this.props.data.questions;
    const chosen = this.props.match.params.id;
    let selectedContent = questions.map((question) => {
      if(question._id == chosen){
        return <h1 key={question._id}>Topic: {question.topic}</h1>
      }
    });

    return(
      <React.Fragment>
        {selectedContent}
      <MultipleChoice topic={this.props.data}/>
    </React.Fragment>
    )
  }
}

export default Topic;
