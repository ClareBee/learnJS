import React from 'react';
import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import DragDropBox from '../components/DragDropBox';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';

DragDropContext(HTML5Backend)
class DragDropContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dragDropBoxes: [{},{},{}],
      questionBoxes: [{},{},{}],
      droppedBoxIndex: [],
    }
  }
  render(){
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
  

    </div>
    )
  }
}

export default DragDropContainer;
