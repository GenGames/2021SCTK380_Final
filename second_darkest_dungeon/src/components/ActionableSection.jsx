import React, {Component} from 'react';
import ActionButton from './ActionButton';

class ActionableSection extends Component {
  state ={
    currentActions:[
      {id: 0, actionText: "Look Around", actionFunction:"lookAround"},
      {id: 1, actionText: "Find Shelter", actionFunction:"lookAround"},
      {id: 2, actionText: "Eat Food", actionFunction:"lookAround"}
    ]
  };

  render(){
    return (
      <div id="ActionableSection" className="parentItem">
        <h4 style={{textAlign: "center"}}>Crash Site</h4>
        {this.state.currentActions.map(actionButton =>
          <ActionButton
            key={actionButton.id}
            actionText={actionButton.actionText}
            actionFunction={actionButton.actionFunction}
          />
        )}
      </div>
    );
  }

}

export default ActionableSection;
