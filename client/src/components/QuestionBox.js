import React from 'react';
import PropTypes from 'prop-types';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';

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
  name: PropTypes.bool.isRequired,
  }

  render(){
    const { name, canDrop, isOver, connectDropTarget } = this.props;

		const isActive = canDrop && isOver;
		let backgroundColor = 'grey';
		if (isActive) {
			backgroundColor = 'green'
		} else if (canDrop) {
			backgroundColor = 'red'
		}

		return connectDropTarget(
			<div style={{ ...style, backgroundColor }}>
				{isActive ? 'Release to drop' : 'Drag a box here'}
        <h2 ref={name}>{this.props.question}</h2>
			</div>
		)
  }
}
export default DropTarget(ItemTypes.BOX, boxTarget, collect)(QuestionBox);
