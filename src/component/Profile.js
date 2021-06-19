import React from "react";
import myphoto from "./photo.jpg"

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     imagesrc: myphoto,
      imagealt: "photo",
      fullName: "Darine Ben Mahmoud",
      profession: "Devloppeur web full stack",
      bio: "je suis un developpeur web front ent et back end ,je maitrise la bibliotheque react ",
      show: true,
      
    };
  }

  showProfile = () => {
    if (this.state.show === true) {
      this.setState({
        imagesrc: "",
        imagealt:"",
        fullName: "",
        profession: "",
        bio: "",
        show: false,
      });
    } else {
      this.setState({
        imagesrc: myphoto,
        fullName: "Darine ben mahmoud",
        profession: "Devloppeur web full stack",
        bio: "je suis un developpeur web front ent et back end ,je maitrise la bibliotheque react",
        show: true,
      });
    }
  };

  render() {
      const styleh = {
color:"#191970"


      }
   
    return (
      <div>
        <img src={this.state.imagesrc} alt={this.state.imagealt} />
        <br/>
        <br/>
        <h4 style={styleh}> NAME:</h4>
        <h5>{this.state.fullName}</h5>
        <h4 style={styleh}> Profession:</h4>
        <h5>{this.state.profession}</h5> <h4 style={styleh}> BIO:</h4>
        <h5>{this.state.bio}</h5>
        <br></br>
        <button type="button" onClick={this.showProfile}>
          Change Profile
        </button>
       
      </div>
    );
  }
 
}
export default Profile;
