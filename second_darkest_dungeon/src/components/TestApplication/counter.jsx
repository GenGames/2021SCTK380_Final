import React, {Component} from 'react';

class Counter extends Component {
  state ={
    maxValue: 10
  };

  render(){
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter,1)}
          className="btn btn-secondary btn-sm m-1 text-monospace"
          disabled={this.getIncrementButtonEnabled(true)}>
          +
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter,-1)}
          className="btn btn-secondary btn-sm m-1 text-monospace"
          disabled={this.getIncrementButtonEnabled(false)}>
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses(){
    let classes = `badge m-2 badge-`;
    classes += (this.props.counter.value === 0)? 'warning': 'primary';
    return classes
  }
  getIncrementButtonEnabled(isIncrementUp){
    const currentValue = this.props.counter.value;
    if (isIncrementUp) {
      if (currentValue >= this.state.maxValue) {
        return true;
      }else{
        return false;
      }
    }
    else{
      if (currentValue <= 0) {
        return true;
      }else{
        return false;
      }
    }
  }
}

export default Counter;
