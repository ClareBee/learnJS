import React from 'react';
import PropTypes from 'prop-types';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';

const style = {
	height: '17rem',
	width: '17rem',
	margin: '1.5rem',
	color: 'white',
  borderRadius: '5px',
	padding: '1rem',
  fontSize: '1.5rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
  boxShadow: '2px 2px 2px 3px rgba(0,0,0,0.4)'

}

const boxSource = {
	beginDrag(props) {
		return {
			name: props.name,
		}
	},
  endDrag(props, monitor) {
  const item = monitor.getItem();
  const dropResult = monitor.getDropResult();
    if (dropResult) {
      console.log(dropResult);
    }
  },
}
function collect(connect, monitor) {
 return {
   connectDragSource: connect.dragSource(),
   isDragging: monitor.isDragging(),
 };
}

class DragDropBox extends React.Component {
  static propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  }
  constructor(props){
    super(props);
  }

  render(){
    const { isDragging, isDropped, connectDragSource } = this.props;
	  const backgroundColor = isDragging ? '#FF7328' : '#16C170';
    console.log(this.props);
    if(this.props.answer == this.props.name && isDragging){
      alert("Well done! You're right!");
    }

    return connectDragSource(

        <div style={{ ...style, backgroundColor }}>
          <h4>{this.props.answer}</h4>
        </div>
    );
  }
}
export default DragSource(ItemTypes.BOX, boxSource, collect)(DragDropBox);
