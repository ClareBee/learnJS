import React from 'react';

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
      <h1>{selectedContent}</h1>

    )
  }
}

export default Topic;
