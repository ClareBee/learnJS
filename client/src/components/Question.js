import React from 'react';

class Question extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        inputAnswer: ""
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(e){
    const input = e.target.value;
    this.setState({
      inputAnswer: input
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    const newAnswer = this.state;
    console.log(this.props);
    console.log(this.state);
    console.log(newAnswer);
    let correct = this.props.questions[0].answer;
    console.log(correct);
    if(newAnswer == this.props.questions[0].answer){
      console.log("success");
    } else{

    }
  }

  render(){
    console.log(this.props);
    return(
      <div>
      <h1>this is the container</h1>
      <form onSubmit={this.handleSubmit} ref="answer-form">
      <input onChange={this.handleChange} required type="text" name="answer" placeholder="Your answer"/>
      <button type="submit">submit</button>
      </form>
    </div>
    )
  }
}

export default Question;
