import React, { useContext } from "react"; 
import "./App.css"
import AllRoute from "./Components/AllRoute";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"; 

function App() {   
  return (
    <div className="App">  
      <Navbar />
      <div className="allrout">
        <AllRoute /> 
      </div>
      <hr className="horizontal"  />
        <Footer /> 
    </div>
  );
}

export default App;
