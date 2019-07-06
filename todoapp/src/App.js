import React from 'react';
import './App.css';
import {connect} from 'react-redux'

var w;
class App extends React.Component {
  constructor(props){
    super(props);
  }
  setWork = (e)=>{
    w=e.target.value
  }
  show = (e)=>{
    let doc = document.getElementById(e.target.id);
    doc.style.textDecoration = 'line-through' ;
    doc.style.color = 'grey'
  }
  render(){
  return (
    <div >
     <div className ="todoDiv">
       <h1 className="heading">Todo App</h1>
       <div className="formDiv"> 
        <form>
          <input type='text' onChange={this.setWork} id="input"/>
          <br/>
          <input type="submit" value="Add Work" onClick={this.props.Add_work} id="btn"/>
        </form>
       </div>
       <div className="taskDiv">

        <h1 className="header heading">Pendings</h1>
         <ol>
          {this.props.todo.map((k,s)=>{
            return  <li key={s} id={s} onClick={this.show}>{this.props.todo[s]}</li>
          })}
          </ol>
        </div>
      </div>
     </div>
  );
}
}
const mapStateToProps = (state)=>{
  return{
    todo:state.todo.slice()
  }
}
const mapDispachToProps = (dispach)=>{
  return{
    Add_work:(e)=>{
      e.preventDefault();
      dispach({type:'ADD_WORK',work:w})
    }
  }
}
export default connect(mapStateToProps,mapDispachToProps)(App);
