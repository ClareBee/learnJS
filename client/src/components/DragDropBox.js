import React from 'react';
import PropTypes from 'prop-types';
import ItemTypes from './ItemTypes';
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
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(){
    if(this.props.name == this.props.answer){
      alert("yep")
    }else{
      alert("nope")
    }
  }
  component(){
      this.handleSelection()
    }
  render(){
		// let backgroundColor = 'red';
    const { isDragging, isDropped, connectDragSource } = this.props;
	  const backgroundColor = isDragging ? 'yellow' : 'red';
    console.log(this.props);
    if(this.props.answer == this.props.name && isDragging){
      alert("You're right!")
    } 

    return connectDragSource(

        <div style={{ ...style, backgroundColor }}>
          <p>{this.props.answer}</p>
        </div>
    );
  }
}
export default DragSource(ItemTypes.BOX, boxSource, collect)(DragDropBox);
