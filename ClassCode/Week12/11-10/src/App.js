import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import Welcome from './Welcome';
import List from './List';

function App() {
  // don't care what this app.js is rendering 
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div>
      <Clock date = {new Date()}/>
      <Welcome name = "Torsh" />
      <Welcome />
      <List />
      {/* <List numbers = [113, 99, 73]/> */}
      <List numbers = {[{key: "abc123, value: 1"}, 3,77,99]}/>
    </div>
  );
}

export default App;
