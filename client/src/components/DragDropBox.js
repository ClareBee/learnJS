import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { DragSource } from 'react-dnd'

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
}
DragSource(props => props.type, boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))

class DragDropBox extends React.Component {
  constructor(props){
    super(props);

  }
  static propTypes = {
  connectDragSource: PropTypes.func.isRequired,
}



  render(){

		let backgroundColor = 'red';
    const { name, isDropped, isDragging, connectDragSource } = this.props;
		// if (isCorrect) {
		// 	backgroundColor = 'green'
		// } else if (isWrong) {
		// 	backgroundColor = 'red'
		// }
    console.log(this.props);
    return (

    <div style={{ ...style, backgroundColor }}>
      <h2>{this.props.answer}</h2>
    </div>
  )
  }
}
export default DragDropBox;
