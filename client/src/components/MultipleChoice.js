import React from 'react';

class MultipleChoice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputAnswer: "",
      correctAnswer: "",
      points: 0,
      dogImage: ""
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
  if(this.state.inputAnswer.toLowerCase() === this.state.correctAnswer.toLowerCase()){
    console.log("success")
    this.setState( prevState => {
      return {
      points: prevState.points + 1
    }
    });
    this.styleAnswers(e, "green");

  }else{
    this.styleAnswers(e, "red");
  }
}

styleAnswers(e, answerColor){
  e.target.style.color = answerColor;
  e.target.style.border = `solid 4px ${answerColor}`;
}
componentDidUpdate(){
  if(this.state.points == 3){
    const dogUrl = "https://dog.ceo/api/breeds/image/random";
    this.setState( prevState => {
      return {
        points: null
      }
    })
    fetch(dogUrl)
    .then(function(response) {
    if(response.ok){
      console.log("success");
      return response.json();
    }
    throw new Error("Network response wasn't ok");
    })
    .then(data => {
    this.setState({dogImage: data.message});
    })
    .catch(function(error){
    console.log(error.message);
    });
  }
}
handleAnotherRound(){
  this.setState({
    dogImage: ""
  })
}
render(){
  const questionSet = this.props.topic.questions;
  const shuffledQq = questionSet.sort(() => .5 - Math.random());
  let selectedQq = shuffledQq.slice(0, 3);

  const questionsAsked = selectedQq.map((question, index) => {

   return (
      <li><p>{question.question}</p>
      <form onSubmit={this.handleSubmit} ref="answer-form">
        <input onChange={this.handleChange} required type="text" name={question.answer} placeholder="Your answer"/>

        <button className="answer-btn btn btn-success" >Answer</button>
      </form>

      </li>
     )
  })
return(
  <div>
  <h1>Questions:</h1>
  <ul>
  {questionsAsked}</ul>
  <h1>{this.state.points}</h1>
  <img src={this.state.dogImage} />
  </div>
  )
}

}

export default MultipleChoice;
