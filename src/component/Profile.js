import React from "react";


class Profile extends React.Component {
  
  constructor (props){
    super (props);
    this.state={
      timer:0
    }
  }
 

  render() {
    
      const styleh = {
color:"#191970"


      }
    
   
    return (
      <div>
        <img src={this.props.person.imagesrc} alt={this.props.person.imagealt} />
        <br/>
        <br/>
        <h4 style={styleh}> NAME:</h4>
        <h5>{this.props.person.fullName}</h5>
        <h4 style={styleh}> Profession:</h4>
        <h5>{this.props.person.profession}</h5> <h4 style={styleh}> BIO:</h4>
        <h5>{this.props.person.bio}</h5>
        <br></br>
      
       
        <h5>
    current count:{this.state.timer}
</h5>
       
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ timer:this.state.timer+1 }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
 
}
export default Profile;
