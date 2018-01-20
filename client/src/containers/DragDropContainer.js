import React from 'react';
import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import DragDropBox from '../components/DragDropBox';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';

DragDropContext(HTML5Backend)
class DragDropContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <h1>Drag and Drop Container</h1>
      <DragDropBox />
    </div>
    )
  }
}

export default DragDropContainer;
