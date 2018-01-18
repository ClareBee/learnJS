import React from 'react';

class QuestionContainer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        chosenTopic: ""
      }

      this.handleClick = this.handleClick.bind(this);

    }

  handleClick(e){
    console.log(e.target.value);
  }


  render(){
    console.log(this.props);
    const questions = this.props.questions.map((question, index) => {
      return <li onClick={this.handleClick} value={index}>{question.topic}</li>
    });
    return(
      <ul>
        {questions}
      </ul>
    );
  }
}

export default QuestionContainer;
