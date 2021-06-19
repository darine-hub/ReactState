import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./component/Profile"
import Timer from './component/Timer';

function App() {

  const container= {
    "marginTop":"120px",
    "background": "#ADD8E6",
   
    "padding": "30px 80px",
    "maxWidth": "500px",
    "margin": "0 auto",
    "boxShadow": "0 15px 16px .17px rgba(0,0,0,0.05)",
    
    
  
  }
  return (
    <div style={container}>
    <Profile/>
    <Timer/>
    </div>
    
  );
}

export default App;
