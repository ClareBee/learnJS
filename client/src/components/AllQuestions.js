import React from 'react';

class AllQuestions extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){

  }
  render(){
    console.log(this.props)
    const allquestions = this.props.questions.map(question => {
      return <form action="" method="POST" onSubmit={this.handleSubmit}><li>{question.question}</li><button>delete</button></form>
    });
    return(
      <React.Fragment>
      <h1>all the questions</h1>
      <ul>
        {allquestions}
      </ul>
    </React.Fragment>
  );
  }
}

export default AllQuestions;
