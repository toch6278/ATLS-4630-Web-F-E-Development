import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name = "Torsh" />
  </React.StrictMode>
);

// root.render(<h1> Hello World! </h1>)

// function Clock(props)
// {
//   // props are read only components 
//   return (
//     <div>
//       <h1> Hello, world!</h1>
//       <h2> It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// // updating page 
// function tick() {
//   root.render(<Clock date = {new Date()}/>);
// }
// setInterval(tick, 1000); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
