import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from'./HomeComponent';
import Profile from './Profile';
import Account from './Account';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <text className="div">This is a rectangle!<br/><br/>
        <img src={logo} className="App-logo" alt="logo" /></text>
         {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <table >
         
          
          <tr>
            <td>swarup </td>
            
          
          </tr>
          <tr>
            <td>talukdar </td>
            
          
          </tr>
          <HomeComponent text={{roll: 12}} data='roll no. passed'/>
          

        </table>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Profile text='Hello prop funct component'/>
          <Account text={{name:'swap'}} data='some data to transfer'/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    
  );
}

export default App;
