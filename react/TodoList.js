import React, { Component } from 'react';
import store from './stroe/index';

class TodoList extends Component {
    constructor(){
        super();
        this.state={list:store.getState().todolist.list};
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todolist.list
            })import React, { Component } from 'react';
// import store from './store';
import {add_todo} from './actions/index';
import {del_todo} from './actions/index';
import {connect} from 'react-redux';
// class TodoList extends Component {
//     constructor(){
//         super();
//         // this.state={
//         //     list:store.getState().list//拿到state对象中的list
//         // }
//         // store.subscribe(()=>{//当前想变需要订阅
//         //     this.setState({
//         //         list:store.getState().list
//         //     })
//         // })
//     }
//     handleAdd=(e)=>{
//         if(e.keyCode==13){
//             // store.dispatch(add_todo(e.target.value));
//             this.props.dispatch(add_todo(e.target.value));
//         }
//     }
//   render() {
//     let {list}=this.props;
//     return (
//       <div>
//         <input onKeyDown={this.handleAdd} type="text"/><br/>
//         <ul>
//             {
//                 list.map((item,index)=>{
//                     return <li key={index}>{item}</li>
//                 })
//             }
//         </ul>
//       </div>
//     )
//   }
// }
let TodoList=(dispatch,list)=>{
    let handleAdd=(e)=>{
        if(e.keyCode==13){
            dispatch(add_todo(e.target.value));
        }
    }
    let handleDel=(index)=>{
        dispatch(del_todo(index))
    }
    return(
        <div>
          <input onKeyDown={handleAdd} type="text"/><br/>
          <ul>
              {
                 list.map((item,index)=>
                      (<li onClick={()=>handleDel(index)} key={index}>{item}</li>) 
                  )
              }
          </ul>
        </div>
      )
}
let mapStateToProps=(state)=>{
    return {
        list:state
    }
}
export default connect(mapStateToProps)(TodoList);

        })
    }
    handleAdd=(e)=>{                                               
        if(e.keyCode===13){
            store.dispatch({type:'add_item',value:e.target.value});
            e.target.value='';  
        } 
    }
    handleDec=(i)=>{
        store.dispatch({type:'dec_item',value:i});
    }
    render() {
        return (
            <div>
                <input style={{width:'260px',height:'30px',display:'inline'}} type="text" onKeyDown={this.handleAdd}/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                        <li style={{width:'200px'}}>
                            {item}
                            <span onClick={()=>{this.handleDec(index)}} style={{color:'red',float:'right',cursor:'pointer'}}>×</span>
                        </li>))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;