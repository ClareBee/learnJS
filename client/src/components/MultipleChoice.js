import React from 'react';

class MultipleChoice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputAnswer: "",
      correctAnswer: ""
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e){
  const input = e.target.value;
  this.setState({
    inputAnswer: input,
    correctAnswer: e.target.name
  });

}

handleSubmit(e){
  e.preventDefault();
  if(this.state.inputAnswer.toLowerCase == this.state.correctAnswer.toLowerCase){
    console.log("success")
  }else{
    console.log("failure")
  }

}

render(){
  const questionsAsked = this.props.topic.questions.map((question, index) => {
   return (
      <li><p>{question.question}</p>
      <form onSubmit={this.handleSubmit} ref="answer-form">
        <input onChange={this.handleChange} required type="text" name={question.answer} placeholder="Your answer"/>
        <button>Answer</button>
      </form>
      </li>
     )
  })
return(
  <div>
  <h1>this is the container</h1>
  <ul>
  {questionsAsked}</ul>
  </div>
  )
}

}

export default MultipleChoice;
