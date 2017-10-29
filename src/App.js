import React, { Component } from 'react';
import './App.css';

import MembersContainer from './containers/MembersContainer';
import MessagesContainer from './containers/MessagesContainer';
import { Messenger } from './components/Messenger';


class App extends Component {
  render() {
    // return (
    //   <h1>
    //     Hello Robin!
    //   </h1>
    // );
    return (
      <MembersContainer>
        <MessagesContainer>
          <Messenger />
        </MessagesContainer>
      </MembersContainer>
    );
  }
}

export default App;
