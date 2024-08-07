import React, {Component} from 'react';
import './App.css';

import BaseContainer from './Components/BaseContainer/BaseContainer';
import MainPage      from './Components/MainPage/MainPage';


class App extends Component {
  
  render(){
    return <BaseContainer children={<MainPage/>} />;
  }

}

export default App;
