import React from 'react';

class AllQuestions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emptied: false,
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
    this.setState({
      emptied: true
    });
    // ReactDOM.render()
  }

  render(){
    console.log(this.props)
    let message = "";
    let allquestions = "";
    let btn = this.refs.deleteButton;
    if(this.state.emptied || this.state.selectedQuestion.length == this.props.questions.length){
       message = <li>All questions deleted</li>
       if(btn){
       btn.style.visibility = "hidden";
     }
    }
    if(!this.state.emptied){
    allquestions = this.props.questions.map(question => {

      return <form action="" method="POST" name={question._id} onSubmit={this.handleSubmit}>

                <li value={question._id}
                  className={this.state.selectedQuestion.includes(question._id) ? "deleted" : ""}>
                  {question.question}
                </li>

                <button key={question._id}
                  className={this.state.selectedQuestion.includes(question._id) ? "deleted" : ""}>
                  delete
                </button>
             </form>
      });
    }
    return(
      <React.Fragment>
      <h1>all the questions</h1>
      <button ref="deleteButton" onClick={this.handleClick} className={this.state.emptied ? "deleted" : ""}>Delete all</button>
      <ul>
        {message}{allquestions}
      </ul>
    </React.Fragment>
    );
  }
}

export default AllQuestions;
