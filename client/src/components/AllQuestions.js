import React from 'react';

class AllQuestions extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    return(
      <React.Fragment>
      <h1>all the questions</h1>

    </React.Fragment>
    )
  }
}

export default AllQuestions;
