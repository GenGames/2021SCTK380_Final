import React, {Component} from 'react';

class DescriptionItem extends Component {
  state ={

  };

  render(){
    return (
      <p className="subitem DescriptionItem">
        {this.props.description}
      </p>
    );
  }

}

export default DescriptionItem;
