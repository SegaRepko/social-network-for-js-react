import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {addPost, updateNewPostText} from './redux/state';



export let rerenderEntireTree = (state) => {
ReactDOM.render(
  
  <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
  </React.StrictMode>,
  document.getElementById('root'));
}
 