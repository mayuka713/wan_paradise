import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
var rootElement = document.getElementById('root');
if (rootElement) {
    var root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}
else {
    console.log("Failed to find the root element. Please check your HTML file.");
    // If you want to start measuring performance in your app, pass a function
    //  log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
}
