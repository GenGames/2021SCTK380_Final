import React, {Component} from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';
import './App.css';

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 2},
      {id: 2, value: 0},
      {id: 3, value: 3},
      {id: 4, value: 0}
    ]
  };

  constructor(){
    super();
    console.log('app constructed');
  }

  handleIncrement = (counter,incrementValue) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value += incrementValue;
    this.setState({counters})
  }
  handleDelete = (counterId) =>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    // this.setState({ counters }); == this.setState({ counters: counters });
  }
  handleReset = () =>{
    const counters = this.state.counters.map(c =>{
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }

  render(){
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
           />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
