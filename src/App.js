import React, { Component } from 'react';
import Tabbar from './Components/Tabbar/Tabbar';

class App extends Component{
  render () {
    return (
      <div>
        <Tabbar/>
        {this.props.children}
      </div>
    )
  }
}

export default App;
