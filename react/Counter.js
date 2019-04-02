import React, { Component } from 'react';
import store from './stroe/index';
class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action = {type:'ADD'};
        store.dispatch(action);
    }
    handleDec=()=>{
        let action = {type:'DEC'};
        store.dispatch(action);
    }
    handleOdd=()=>{
        let action = {type:'ADD_ODD'};
        store.dispatch(action);
    } 
    handleAsync=()=>{
        let action = {type:'ADD_ASYNC'};
        setTimeout(()=>{
            store.dispatch(action);
        },1000);   
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times
                    <br/>
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <br/>
                    <button onClick={this.handleOdd}>Increment if odd</button>
                    <button onClick={this.handleAsync}>Increment Async</button>
                </p>
            </div>
        );
    }
}

export default Counter;