import React, {Component} from 'react';
import DescriptionBox from './components/DescriptionBox';
import ActionableSection from './components/ActionableSection';
import Inventory from './components/Inventory';
import './index.css';

class TheLongDark extends Component {
  state = {};

  render(){
    return (
      <main>
        <DescriptionBox />
        <ActionableSection />
        <Inventory />
      </main>
    );
  }
}

export default TheLongDark;
