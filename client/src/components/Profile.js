import React from 'react';
import ProfilePic from './profile.jpg';


class Profile extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <section className="profile">
        <h1>Your Profile</h1>
        <img className="profile-pic" src={ProfilePic} />
        <div className="profile-info">
          <h2>UserName: Clare </h2>
          <h5>Feature coming soon: authentication</h5>
        </div>
      </section>
    );
  }
}

export default Profile;
