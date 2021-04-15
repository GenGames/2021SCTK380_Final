import React, {Component} from 'react';
import InventoryItem from './InventoryItem';

class Inventory extends Component {
  state ={
    inventoryItems:[
      {id: 0, name: "bandage", quantity: 2},
      {id: 1, name: "water bottle", quantity: 1},
      {id: 2, name: "protein bar", quantity: 2},
      {id: 3, name: "gloves", quantity: 1},
      {id: 4, name: "tape", quantity: 15},
    ]
  };

  render(){
    return (
      <div id="Inventory" className="parentItem">
        {this.state.inventoryItems.map(inventoryItem =>
          <InventoryItem
            key={inventoryItem.id}
            name={inventoryItem.name}
            quantity={inventoryItem.quantity}
          />
        )}

      </div>
    );
  }

}

export default Inventory;
