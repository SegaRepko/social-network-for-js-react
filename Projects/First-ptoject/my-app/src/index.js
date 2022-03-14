import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";



let postsData = [
  {id: 1, message: 'Hi, how are you?', likesCount: 13},
  {id: 2, message: "It's my first post", likesCount: 17},
  {id: 3, message: 'Lets go make money!!!!', likesCount: 21},
]

let dialogsData = [
  {id: 1, name: 'Serezha'},
  {id: 2, name: 'Kate'},
  {id: 3, name: 'Mama'},
  {id: 4, name: 'Papa'},
  {id: 5, name: 'Liza'},
]

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: "It's my"},
  {id: 3, message: 'How are you?'},
  {id: 4, message: 'Fine'},
  {id: 5, message: 'Goodbye'},
]


ReactDOM.render(
  
  <React.StrictMode>
      <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
