import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from './Button';
//import Result from './Button';

class App extends Component {
  constructor (props){
    super(props);
    this.state={counter:0};
  }

  incrementCounter = (incrementValue) => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter + incrementValue
    }));
  }

  render() {
    return (
      <div className="App">
        <Button incrementValue={1} onClickAddFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickAddFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickAddFunction={this.incrementCounter} />
        <Button incrementValue={15} onClickAddFunction={this.incrementCounter} />
        <Result counter={this.state.counter}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Button extends React.Component{

  /*handleClick = () => {
      this.setState((prevState) => ({
          counter: prevState.counter + 1
      }));
  }*/
  render() {
      return(
          <button onClick={()=>this.props.onClickAddFunction(this.props.incrementValue)}>
              +{this.props.incrementValue}
          </button>
      );}
}

const Result = (props) => {
  return(
      <div>{props.counter}</div>
  );
};

export default App;
