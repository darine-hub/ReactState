import React from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./component/Profile";
import myphoto from "./photo.jpg"
//import Timer from './component/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false, 
      person :{
     imagesrc: myphoto,
      imagealt: "photo",
      fullName: "Darine Ben Mahmoud",
      profession: "Devloppeur web full stack",
      bio: "je suis un developpeur web front ent et back end ,je maitrise la bibliotheque react ",
     
    
    
    }
    };
  }
 
  toggleVisibility= ()=>{
    if(this.state.visibility===false){
      this.setState({visibility:true})
    }
    else{
      this.setState({visibility:false})
    }
   
    }

    render() {
    
      const container= {
        marginTop:"120px",
        background: "#ADD8E6",
       
        padding: "30px 80px",
        maxWidth: "500px",
        margin: "0 auto",
        boxShadow: "0 15px 16px .17px rgba(0,0,0,0.05)",
        
        
      
      }

  return (
    <div style={container }>

{this.state.visibility && <Profile person={this.state.person} />}
    <button type="button" onClick={this.toggleVisibility}>
           Profile
        </button>
    
    </div>
    
  );
}   }

export default App;
