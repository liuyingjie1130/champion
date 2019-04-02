import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import TodoList from './TodoList';


ReactDOM.render(
    <div style={{padding:'30px'}}>
        <Counter /> 
        <TodoList/>
    </div>
    , 
    document.getElementById('root'));