import React from 'react';

class MyModal extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="my-modal"><img src={this.props.image}/></div>
    )
  }
}


export default MyModal;
