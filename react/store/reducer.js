import { combineReducers } from "redux";

let counter= (state=0,action)=>{
    switch(action.type){
        case 'ADD':
            return state+1;
        case 'DEC':
            return state-1;
        case 'ADD_ODD':
            if(state%2!==0){
                return state+1;
            }return state;
        case 'ADD_ASYNC':
            return state+1;
        default:
            return state;
    }
}


let initValue = [1,2,3];

let todolist= (state=initValue,action)=>{
    switch(action.type){
        case ADD_TODO_ITEM:
            return [...state,action.value];//数组
            // let newState = JSON.parse(JSON.stringify(state));
            // newState.list.push(action.value);//对象
            // return newState;
        case DEL_TODO_ITEM:
            return state.filter((item,index)=>{
                return index!==action.index
            })
            // let newState1=JSON.parse(JSON.stringify(state));
            // newState1.list.splice(action.index,1);
            // return newState1;
        default :
            return state;
    }
}

export default combineReducers({
    counter,
    todolist
})