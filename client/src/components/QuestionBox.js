import React from 'react';
import PropTypes from 'prop-types';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';

const style = {
	height: '17rem',
	width: '17rem',
  margin: '1.5rem',
	color: 'white',
  borderRadius: '5px',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left'
}
const boxTarget = {
	drop() {
		return { name: "Question" }
	},
}

function collect(connect, monitor){
	return {connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
  }
}

class QuestionBox extends React.Component {
  static propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  }


  render(){
    const { name, canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		let backgroundColor = 'grey';
		if (isActive) {
			backgroundColor = 'green'
		} else if (canDrop) {
			backgroundColor = '#16C170'
		}

		return connectDropTarget(
			<div style={{ ...style, backgroundColor }}>
				{isActive ? 'Release to drop' : 'Drag a box here'}
        <h4 ref={name}>{this.props.question}</h4>
			</div>
		)
  }
}
export default DropTarget(ItemTypes.BOX, boxTarget, collect)(QuestionBox);
