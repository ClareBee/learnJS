import React from 'react';
import sampleSize from 'lodash/sampleSize';
import MyModal from './Modal';

class MultipleChoice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputAnswer: "",
      correctAnswer: "",
      points: 0,
      dogImage: "",
      chosenQuestions: 3,
      answeredQuestions: [],
      }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.getRandomThree = this.getRandomThree.bind(this);
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
  let answered = this.state.answeredQuestions.slice();
  answered.push(e.target.name)
  this.setState({
    answeredQuestions: answered
  })
  this.forceUpdate();
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
  });
}

//where could this be called?
getRandomThree(arr){
  const selected = sampleSize(arr, 3).slice();
  return selected;
}

render(){
  console.log(this.state.answeredQuestions)
  // const threeQq = this.getRandomThree(this.props.topic.questions).slice();
  const threeQuestions = this.props.topic.questions.slice(0, this.state.chosenQuestions);
  const questionsAsked = threeQuestions.map((question, index) => {
    return(
      <li key={index}>
        <p>{question.question}</p>
        <form onSubmit={this.handleSubmit} name={index} ref="answer-form">
          <input onChange={this.handleChange} required type="text" name={question.answer} placeholder="Your answer"/>
          <button disabled={this.state.answeredQuestions.includes(index.toString())} ref="submittedButton" className="answer-btn btn btn-success">Answer</button>
        </form>
      </li>
    );
  });

return(
  <React.Fragment>
  <div>
    <h1>Questions:</h1>
    <ul>
      {questionsAsked}
    </ul>
    <h1>{this.state.points}</h1>
    {/* <img src={this.state.dogImage} /> */}



  </div>
  <MyModal image={this.state.dogImage} points={this.state.points} answeredQuestions={this.state.answeredQuestions}/>
</React.Fragment>
);
}

}

export default MultipleChoice;
