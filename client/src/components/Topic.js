import React from 'react';
import MultipleChoice from './MultipleChoice';
class Topic extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const questions = this.props.data;
    const chosen = this.props.match.params.id;
    let selectedContent = questions.questions.map((question, index) => {
      if(index == chosen){
        return <h1>{question.topic}</h1>
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
