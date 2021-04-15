import React, {Component} from 'react';

class InventoryItem extends Component {
  state ={ };

  render(){
    return (
      <div className="subitem InventoryItem">
        <span>{this.props.name}</span>
        <span style={{float: "right"}}>{this.props.quantity}</span>
      </div>
    );
  }

}

export default InventoryItem;
