import React from 'react';


class WelcomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){

    return(
      <React.Fragment>
        <section className="welcome" >
        </section>
        <div className="welcome-message"><h1>LearnJS</h1></div>
      </React.Fragment>
    );
  }
}
export default WelcomePage;
