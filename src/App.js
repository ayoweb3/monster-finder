import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor() {
    super();

    this.state = { 
      monsters:[]
    };

}


  render(){
    const {monsters}= this.state
    return (
      <div className="App">
        {
          monsters.map((monster) => {
            return(<h1 key={monster.id}>{monster.name}</h1>)
          })
        }
      </div>
    );
  }
}

export default App;
