import React from 'react';

class AllQuestions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emptied: false,
      selectedQuestion: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.deleteById = this.deleteById.bind(this);
  }
  //delete individual question
  handleSubmit(e){
    e.preventDefault();
    console.log(e.target.name);
    // this.setState({
    //   selectedQuestion: e.target.name
    // })
    const deleteOneUrl = `/questions/delete/${e.target.name}`;
    console.log(deleteOneUrl);
    fetch(deleteOneUrl, {
      method: "DELETE"
    }).then(res => res)
    .catch(error => console.log("Error: ", error))
    .then(response => console.log("Respose: ", response));
    this.forceUpdate();
  }


  // deleteById(){
  //   const deleteOneUrl = `/questions/delete/${this.state.selectedQuestion}`;
  //   fetch(deleteOneUrl, {
  //     method: "DELETE"
  //   }).then(res => res)
  //   .catch(error => console.log("Error: ", error))
  //   .then(response => console.log("Respose: ", response));
  //   this.forceUpdate();
  // }

  //delete all
  handleClick(){
    console.log(this.props);
    const deleteUrl = '/questions/delete';
    fetch(deleteUrl, {
      method: "DELETE"
    })
    .catch(error => console.log("Error: ", error))
    .then(response => console.log("Success: ", response));
    this.setState({
      emptied: true
    });
  }

  render(){
    console.log(this.props)
    let message = "";
    let allquestions = "";
    if(this.state.emptied){
       message = <li>All questions deleted</li>
    }
    if(!this.state.emptied){
    allquestions = this.props.questions.map(question => {
      return <form action="" method="POST" name={question._id} onSubmit={this.handleSubmit}><li value={question._id}>{question.question}</li><button>delete</button></form>
      });
    }
    return(
      <React.Fragment>
      <h1>all the questions</h1>
      <button onClick={this.handleClick}>Delete all</button>
      <ul>
        {message}{allquestions}
      </ul>
    </React.Fragment>
  );
  }
}

export default AllQuestions;
