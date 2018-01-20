import React from 'react';
import PropTypes from 'prop-types';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import { DragSource } from 'react-dnd';

const style = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left'
}
const boxSource = {
	beginDrag(props) {
		return {
			name: props.name,
		}
	},
  endDrag(props, monitor) {
  const item = monitor.getItem()
  const dropResult = monitor.getDropResult()

  if (dropResult) {
    console.log("You dropped sth")
  }
},
}
function collect(connect, monitor) {
 return {
   connectDragSource: connect.dragSource(),
   isDragging: monitor.isDragging()
 };
}

class DragDropBox extends React.Component {
  static propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}



  render(){

		let backgroundColor = 'red';
    const { isDragging, connectDragSource } = this.props;
		// if (isCorrect) {
		// 	backgroundColor = 'green'
		// } else if (isWrong) {
		// 	backgroundColor = 'red'
		// }
    console.log(this.props);
    return connectDragSource(
      <div>
        <div style={{ ...style, backgroundColor }}>
          <h2>{this.props.answer}</h2>
        </div>
    
      </div>
  )
  }
}
export default DragSource(ItemTypes.BOX, boxSource, collect)(DragDropBox);
