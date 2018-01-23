import React from 'react';

class AllQuestions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedQuestion: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //delete individual question
  handleSubmit(e){
    e.preventDefault();
    const deleteOneUrl = `/questions/delete/${e.target.name}`;
    fetch(deleteOneUrl, {
      method: "DELETE"
    }).then(res => res)
    .catch(error => console.log("Error: ", error))
    .then(response => console.log("Response: ", response));
    let qq = this.state.selectedQuestion.slice();
    qq.push(e.target.name);
    this.setState({
      selectedQuestion: qq
    });
    this.props.onUpdate();
  }

  //delete all
  handleClick(){
    console.log(this.props);
    const deleteUrl = '/questions/delete';
    fetch(deleteUrl, {
      method: "DELETE"
    })
    .catch(error => console.log("Error: ", error))
    .then(response => console.log("Success: ", response));
    this.props.onUpdate();
  }

  render(){
    let message = "";
    if(this.props.questions.length < 1){
      message = <p>No questions, why not add some?</p>
    }
    let allquestions = this.props.questions.map(question => {

      return <form className="container" key={question._id} action="" method="POST" name={question._id} onSubmit={this.handleSubmit}>

                <li className="added-qq" value={question._id}>
                  {question.question}
                  <button key={question._id} className="answer-btn btn btn-danger">
                    delete
                  </button>
                </li>
             </form>
      });
    return(
      <React.Fragment>
        <h1>All the questions...</h1>
          {message}
          <button type="button" ref="deleteButton" onClick={this.handleClick} className={allquestions.length < 1 ? "deleted" : "delete-all-btn btn btn-danger"}>Delete all</button>
          <ul className="all-qq">
            {allquestions}
          </ul>
      </React.Fragment>
    );
  }
}

export default AllQuestions;
