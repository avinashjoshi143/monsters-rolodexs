import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters:[]
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").
    then(Response => Response.json()).
    then(Users => this.setState({monsters:Users}))
  }
  
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (<h1 key={monster.id}>{monster.name}</h1>))}
      </div>
    );
  }
}

export default App;
