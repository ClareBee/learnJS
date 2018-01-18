import React from 'react';

class MultipleChoice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputAnswer: "",
      correctAnswer: "",
      showTick: false,
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
  console.log(this.state.inputAnswer);
  console.log(this.state.correctAnswer);
  e.preventDefault();
  if(this.state.inputAnswer.toLowerCase() === this.state.correctAnswer.toLowerCase()){
    console.log("success")
    this.setState( prevState => {
      return {
      showTick: true,
      points: prevState.points + 1
    }
    });
    e.target.style.color = "green";
    e.target.style.border = "solid 4px green";

  }else{
    console.log("failure");
    e.target.style.color = "red";
    e.target.style.border = "solid 4px red";
  }
  console.log(this.state.points)
}

componentDidUpdate(){
  if(this.state.points == 3){
    const dogUrl = "https://cataas.com/cat/cute";
    this.setState( prevState => {
      return {
        points: null
      }
    })
    fetch(dogUrl)
    .then(function(response) {
    if(response.ok){
      console.log("success");
      return response;
    }
    throw new Error("Network response wasn't ok");
    })
    .then(data => {
    this.setState({dogImage: data.url});
    console.log(data);
    })
    .catch(function(error){
    console.log(error.message);
    });

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
  <h1>{this.state.points}</h1>
  <img src={this.state.dogImage} />
  </div>
  )
}

}

export default MultipleChoice;
