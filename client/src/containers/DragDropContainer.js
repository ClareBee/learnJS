import React from 'react';
import update from 'immutability-helper';
import shuffle from 'lodash/shuffle';
import sampleSize from 'lodash/sampleSize';
import { DragDropContext } from 'react-dnd';
import DragDropBox from '../components/DragDropBox';
import QuestionBox from '../components/QuestionBox';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';

DragDropContext(HTML5Backend)
class DragDropContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dragDropBoxes: [{text: ""},{text:""},{text:""}],
      questionBox: {},
      droppedBoxIndex: null,
      chosenAnswers: [],
    }
    this.getRandomQuestion = this.getRandomQuestion.bind(this);
    this.handleAnswers = this.handleAnswers.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.answerClick = this.answerClick.bind(this);
    this.generateAnswers = this.generateAnswers.bind(this);

  }
  handleClick(){
    this.getRandomQuestion();
  }
  answerClick(){
    this.handleAnswers();
  }
//get random question from database results
  getRandomQuestion(){
    let questionArray = [];
    console.log(this.props);
    this.props.data.questions.map((question)=>{
      questionArray.push(question)
    });
    console.log("random question");
    console.log(this.props.questions);
    console.log(questionArray);
    const selectedQq = sampleSize(questionArray, 1);
    console.log(selectedQq[0]);
    this.setState({
      questionBox: selectedQq[0]
    })
    this.forceUpdate();
    this.generateAnswers();

  }

  generateAnswers(){
    const questions = this.props.data.questions;
    console.log("random answers accessed");
    let answers = [];
    questions.map((question) => {
      answers.push(question.answer)
    });
    let chosenA = sampleSize(answers, 2);
    this.setState({
      chosenAnswers: chosenA
    });
  }

  handleAnswers(){
    let answerArray = this.state.chosenAnswers.slice();
    let thisQuestion = this.state.questionBox;
    console.log(thisQuestion);
    answerArray.push(thisQuestion.answer);
    console.log(answerArray);
    const shuffled = shuffle(answerArray);
    console.log(shuffled);
    this.setState({
      dragDropBoxes: [
        {text: shuffled[0]},
        {text: shuffled[1]},
        {text: shuffled[2]},
      ]
    });
  }
  // componentDidReceiveProps(){
  //   console.log(this.props)
  //   let boxes = this.state.dragDropState.slice()
  //   boxes.push(this.props);
  //   this.setState({
  //     dragDropBoxes: [{ text: boxes[0]}, {text: boxes[1]}, {text:boxes[2]}]
  //   })
  // }
  render(){

    const questions = this.props.data.questions;
    let answers = [];
    questions.map((question) => {
      answers.push(question.answer)
    })
    console.log(answers);
    return(
      <div>
      <h1>Drag and Drop Container</h1>
      <div >
        <button onClick={this.handleClick}>Get random question</button>
        <button onClick={this.answerClick}>Get random answers</button>
      {this.state.dragDropBoxes.map(({}, index) => (
        <DragDropBox
          answer={this.state.dragDropBoxes[index].text}
          chosen={this.state.dragDropBoxes}
          // lastDroppedItem={lastDroppedItem}
          // onDrop={item => this.handleDrop(index, item)}
          key={index}
        />
        ))}
      </div>

      <div>
        <QuestionBox
          question={this.state.questionBox.question}
        />
    </div>

    </div>
    )
  }
}

export default DragDropContainer;
