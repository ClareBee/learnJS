import React from 'react';
import PropTypes from 'prop-types';
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

class DragDropBox extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

		let backgroundColor = 'red';
		// if (isCorrect) {
		// 	backgroundColor = 'green'
		// } else if (isWrong) {
		// 	backgroundColor = 'red'
		// }
    return(
    <div style={{ ...style, backgroundColor }}>
      <h2>drop box</h2>
    </div>
  )
  }
}
export default DragDropBox;
