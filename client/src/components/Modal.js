import React from 'react';

class MyModal extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let gif = this.refs.gif;
    gif.style.visibility = "hidden";
  }
  render(){
    if(this.props.points == 3){
      this.refs.gif.style.visibility = "visible";
    }
    return(
      <div ref="gif" onClick={this.handleClick} className="my-modal">
        <div className="delete-gif">&times;</div>
        <img className="doggy-image" src={this.props.image}/>

      </div>
    )
  }
}


export default MyModal;
