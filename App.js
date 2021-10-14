
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
       
         </div>
        );
 }
}

export default App;


 {/* <Greet />
     <Form />
     <FragmentDemo />
     <LifeCycleA />
 import <NameList /> from './components/Namelist';
 import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
 import Welcome  from  './components/Welcome'
 import Greet from  './components/Greet'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
          {/* />
            <Inline />
            <Stylesheet primary={true} />
              <UserGreeting />
         </div>
            <ParentComponent />
        <EventBind />/* <Greet />
           <FunctionClick />
         <ClassClick />
        <Welcome />
        <Welcome name='Brenda' heroName="Awesome Human 1"/>
        <Welcome name='Audie' heroName="Awesome Human 2" />
        <Welcome name='Kahlil' heroName="Awesome Human 3" />
        <Welcome name='Gibran' heroName="Awesome Human4"/>
        
        <Greet name='Brenda' heroName="Awesome Human 1">
       <p>This is children props</p>
        </Greet>
        <Greet name='Audie' heroName="Awesome Human 2">
          <button>Action</button>
        </Greet>
        <Greet name='Kahlil' heroName="Awesome Human 3"/>
        <Greet name='Gibran' heroName="Awesome Human4"/>
          <Hello></Hello>
    <Counter /> 
        
   */}
