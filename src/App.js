import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import socketIOClient from "socket.io-client";
import SlackMessage from './components/SlackMessage/SlackMessage';
const endpoint = 'http://localhost:4001';
class App extends Component {
  state={
    messages:[]
  }
  componentDidMount(){
    this.socket = socketIOClient(endpoint);
    this.socket.on('all_messages',(messages)=>this.setState({messages:messages}));
    this.socket.on('slack_message',(message)=>this.setState({messages:this.state.messages.concat([message])}));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {this.state.messages.map((message)=>{
          return ( <div className="distance-top"><SlackMessage message={message}/></div>)
        })}
        </p>
      </div>
    );
  }
}

export default App;
