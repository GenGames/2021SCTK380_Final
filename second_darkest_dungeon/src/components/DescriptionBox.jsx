import React, {Component} from 'react';
import DescriptionItem from './DescriptionItem';

class DescriptionBox extends Component {
  state ={
    descriptions:[
      {id: 1, description:"the ground is cold and wet with snow"},
      {id: 2, description:"there are flames and chunks of metal strewn about"},
      {id: 3, description:"trees and snow is torn leading down the valley's cliffedge"},
      {id: 4, description:"further in the valley lies the carcass of a plane"},
      {id: 5, description:"pain surges and fades"},
      {id: 6, description:"conciousness won't last long"}
    ]
  };

  render(){
    return (
      <div id="DescriptionBox" className="parentItem">
      {this.state.descriptions.map(descriptionItem =>
        <DescriptionItem
          key={descriptionItem.id}
          description={descriptionItem.description}
        />
      )}
      </div>
    );
  }

}

export default DescriptionBox;
