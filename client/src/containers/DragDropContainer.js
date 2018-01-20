import React from 'react';
import update from 'immutability-helper';
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
      questionBox: "",
      droppedBoxIndex: [],
    }
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
      {this.state.dragDropBoxes.map(({}, index) => (
        <DragDropBox
          answers={answers}
          chosen={this.state.dragDropBoxes}
          // lastDroppedItem={lastDroppedItem}
          // onDrop={item => this.handleDrop(index, item)}
          key={index}
        />
        ))}
      </div>

      <div>
        <QuestionBox
    
        />
    </div>

    </div>
    )
  }
}

export default DragDropContainer;
