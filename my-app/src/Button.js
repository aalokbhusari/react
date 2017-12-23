import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component{
    constructor (props){
        super(props);
        this.state={counter:0};
    }
    handleClick = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }
    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );}
}

const Result = (props) => {
    return(
        <div>...</div>
    );
};
export default Button;