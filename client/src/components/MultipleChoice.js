import React from 'react';
import sampleSize from 'lodash/sampleSize';
import MyModal from './MyModal';

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
      newQqSet: []
      }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.getRandomThree = this.getRandomThree.bind(this);
  this.tryAgain = this.tryAgain.bind(this);
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
  }
  let answered = this.state.answeredQuestions.slice();
  answered.push(e.target.name);
  this.setState({
    answeredQuestions: answered
  });
  e.target.reset();
  this.forceUpdate();
}

//refactor into MyModal component
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
    this.tryAgain();
    }
    if(this.state.points != this.state.chosenQuestions && this.state.answeredQuestions.length == this.state.chosenQuestions){
    this.tryAgain();
    }
}

tryAgain(){
  this.setState({
    inputAnswer: "",
    correctAnswer: "",
    points: 0,
    dogImage: "",
    answeredQuestions: [],
  });
  const randomQqSet = this.getRandomThree(this.props.topic.questions);
  this.setState({
    newQqSet: randomQqSet
  });
}

getRandomThree(arr){
  const selected = sampleSize(arr, 10).slice();
  return selected;
}

render(){
  var style = {}
  let threeQuestions = [];
  if(this.state.newQqSet.length > 0){
      threeQuestions = this.state.newQqSet.slice(0, this.state.chosenQuestions);
    } else {
      threeQuestions = this.props.topic.questions.slice(0, this.state.chosenQuestions);
    }
  const questionsAsked = threeQuestions.map((question, index) => {
    if(this.state.answeredQuestions.includes(index.toString())) {
      style = {border: "2px solid purple"};
    }else {
      style = {border: "2px solid #FF7328"}
    }
    return(
      <li key={index}>
        <h4>{question.question}</h4>
        <form className="mult-choice-form"
              onSubmit={this.handleSubmit}
              name={index} ref="answerForm">
          <input  onChange={this.handleChange}
                  disabled={this.state.answeredQuestions.includes(index.toString())}
                  required type="text"
                  name={question.answer}
                  placeholder="Your answer"
                  ref="answerText"
                  style={style}
                  />

          <button disabled={this.state.answeredQuestions.includes(index.toString())}
                  ref="submittedButton"
                  className="answer-btn btn btn-success">
           Answer
          </button>
        </form>
      </li>
    );
  });

  return(
    <React.Fragment>
      <div>
        <button className="qq-btn btn btn-info" onClick={this.tryAgain}>Change questions</button>
        <h1>Score:{this.state.points}/{this.state.chosenQuestions}</h1>
        <ul ref="answerList">
          {questionsAsked}
        </ul>
      </div>

      <MyModal  image={this.state.dogImage}
                points={this.state.points}
                answeredQuestions={this.state.answeredQuestions}/>

    </React.Fragment>
    );
  }
}

export default MultipleChoice;
