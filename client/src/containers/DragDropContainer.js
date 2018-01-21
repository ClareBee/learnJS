import React from 'react';
import update from 'immutability-helper';
import shuffle from 'lodash/shuffle';
import sampleSize from 'lodash/sampleSize';
import { DragDropContextProvider, DragDropContext } from 'react-dnd';
import DragDropBox from '../components/DragDropBox';
import QuestionBox from '../components/QuestionBox';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import ItemTypes from '../components/ItemTypes';



class DragDropContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dragDropBoxes: [{text: ""},{text:""},{text:""}],
      questionBox: {
        accepts: "",
        question: "",
        answer: "",
        lastDroppedItem: null
      },
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
      questionBox: {
        accepts: selectedQq[0].answer,
        question: selectedQq[0].question,
        answer: selectedQq[0].answer,
      }
    })
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

  render(){
    const questions = this.props.data.questions;
    let answers = [];
    questions.map((question) => {
      answers.push(question.answer)
    });

    return(

    <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <h1>Drag and Drop Container</h1>

            <div >
              <button onClick={this.handleClick}>Get random question</button>
              <button onClick={this.answerClick}>Get random answers</button>

              <div style={{ overflow: 'hidden', clear: 'both' }}>
              {this.state.dragDropBoxes.map(({}, index) => (
                <DragDropBox
                  answer={this.state.dragDropBoxes[index].text}
                  chosen={this.state.dragDropBoxes}
                  name={this.state.questionBox.answer}
                  key={index}/>
                ))}
              </div>

            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <QuestionBox
                ref="target"
                accepts={this.state.questionBox.accepts}
                question={this.state.questionBox.question}
                name ={this.state.questionBox.question} />
            </div>
          </div>
        </div>
	   </DragDropContextProvider>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragDropContainer);
