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

    if(!this.props.questions){
      return null
    }
    const questions = this.props.data.questions.map((question, index) => {
      return <li onClick={this.handleClick} value={index}>{question.topic}</li>
    });

    return(
    <div>
      <h1>hi</h1>
      <ul>
        {questions}
      </ul>
    </div>
    );
  }
}

export default QuestionContainer;
