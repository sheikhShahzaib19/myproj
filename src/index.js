import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Cssstyle={
  color:'red',
  textAlign:'center',
  textTransform:'capitalize'
}
let currentDate=new Date(2022,2,3,17);
currentDate=currentDate.getHours();
let greetings='';
const cssStyle={};

if(currentDate>1 && currentDate<12){
  greetings='Good morning';
  cssStyle.color="Green";
}
else if(currentDate>=12 && currentDate<20){
  greetings='Good afternoon';
  cssStyle.color="Yellow";
}
else{
  greetings='Good night';
  cssStyle.color="Brown";
}
// const img1;
ReactDOM.render(
  <>
  {/* <p style={Cssstyle}>What are you doing</p>, */}
  <div className='abc'>
  <h1 style={Cssstyle}>My name is Shahzaib</h1>,
  <img src='https://picsum.photos/300/300' alt='this is random pic'/>
  <div className='set'>
  <h1> Our current time is {currentDate}</h1>
  <h2 style={Cssstyle}>Hello {greetings}</h2>
  {/* <img src='https://picsum.photos/200/300' alt='this is random pic'/> */}
  </div>
  </div>
  </>,
  document.getElementById('root')
);

