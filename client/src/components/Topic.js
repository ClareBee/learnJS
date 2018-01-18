import React from 'react';

class Topic extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);

    return(
      <h1>this is the topic</h1>
    )
  }
}

export default Topic;
