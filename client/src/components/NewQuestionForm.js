import React from 'react';

class NewQuestionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topic: '',
      question: '',
      answer: '',
      submitted: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  handleChange(e){
// gets input from user
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    //stops page from reloading
    e.preventDefault();
    const newQuestion = this.state;
    console.log(newQuestion);
    this.addQuestion(newQuestion);
    //clears out form on submission
    this.refs.questionForm.reset();
    //insert confirmation message on submission
    this.setState({
      submitted: true
    })
    this.props.history.push('/all-questions');
    this.props.onUpdate();

  }

  addQuestion(question){
    console.log(question);
    const url = "/new-question";
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.log('Error:', error))
    .then(response => console.log('Success:', response));
    this.forceUpdate();
}

  render(){
    console.log(this.state.topic);
    return(
      <React.Fragment>
        <h1 className="sub-title">Found out something new? Add it here!</h1>

        <div className="form-container">

          <form ref="questionForm" action="" method="POST" onSubmit={this.handleSubmit}>
            <div className="row">
              <input onChange={this.handleChange} required type="text" name="topic" placeholder="Topic"/>
            </div>
            <div className="row">
              <input onChange={this.handleChange} required type="text" name="question" placeholder="Question"/>
            </div>
            <div className="row">
              <input onChange={this.handleChange} required type="text" name="answer" placeholder="Answer"/>
            </div>


            <div className="row">
              <button className="question-button btn btn-success">Add your question</button>
            </div>
          </form>

        </div>
      </React.Fragment>
    )
  }
}

export default NewQuestionForm;
