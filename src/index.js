import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const helloFun = ()=>{
  return <button>真的很重要！！！！</button>
}
const showAlert = ()=>{
  alert("show");
}

ReactDOM.render(
  <div>
    <h1 style = {{color:"red"}}>好想睡喔</h1>
    <button onClick={showAlert}> 我要睡了</button>
    {helloFun()}  
  </div>,
   
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
