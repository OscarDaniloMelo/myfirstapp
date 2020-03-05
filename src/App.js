import React from 'react';
import './App.css';

function HelloWorld(props) {
  return (
  <div id="hello">
    {props.text}
    <h3>{props.subtitle}</h3>
  </div>
  ) 
}

function App() {
  return (
    <div>
      this is my component:
      <HelloWorld text="hola yo" subtitle="hello me"/> 
      <HelloWorld text="hola tu" subtitle="hello you"/> 
      <HelloWorld text="hola mundo" subtitle="hello world"/> 
    </div>
  );
}

export default App;
