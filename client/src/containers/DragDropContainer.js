import React from 'react';
import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import DragDropBox from '../components/DragDropBox';
import AnswerBox from '../components/QuestionBox';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';

DragDropContext(HTML5Backend)
class DragDropContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dragDropBoxes: [{},{},{}],
      questionBoxes: [{}],
      droppedBoxIndex: [],
    }
  }
  render(){
    const questions = this.props.data.questions;
    let answers = [];
    questions.map((question) => {
      answers.push(question.answer)
    })
    let a
    console.log(answers);
    return(
      <div>
      <h1>Drag and Drop Container</h1>
      <div >
      {this.state.dragDropBoxes.map(({}, index) => (
        <DragDropBox
          // lastDroppedItem={lastDroppedItem}
          // onDrop={item => this.handleDrop(index, item)}
          key={index}
        />
        ))}
      </div>

      <div>
      {this.state.questionBoxes.map(({}, index) => (
        <QuestionBox
          key={index}
        />
      ))}
    </div>

    </div>
    )
  }
}

export default DragDropContainer;
