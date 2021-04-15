import React, {Component} from 'react';

class ActionButton extends Component {
  state ={ };

  render(){
    return (
      <button className="subitem ActionButton" onClick={this.props.actionFunction}>
        {this.props.actionText}
      </button>
    );
  }

}

export default ActionButton;
