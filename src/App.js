import React, { useContext } from "react"; 
import "./App.css"
import AllRoute from "./Components/AllRoute";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { TheamContext } from "./Context/TheamContext";

function App() { 
  const {back} = useContext(TheamContext); 

  return (
    <div className="App">  
      <Navbar />
      <div className={back ? "appnav" : "appnav2"}>
        <AllRoute /> 
      </div>
      <hr className="horizontal"  />
        <Footer back={back} /> 
    </div>
  );
}

export default App;
