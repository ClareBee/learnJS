import React from 'react';

class MyModal extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let gif = e.currentTarget;
    gif.style.visibility = "hidden";
  }
  render(){
    return(
      <div onClick={this.handleClick} className="my-modal">
        <img src={this.props.image}/>
        <div className="delete-gif">&times;</div>
      </div>
    )
  }
}


export default MyModal;
