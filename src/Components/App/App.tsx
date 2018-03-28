import * as React from 'react';
import './App.css';
import Encrypt from '../Encrypt/Encrypt';
import Decrypt from '../Decrypt/Decrypt';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Encrypt />
        <Decrypt />
      </div>
    );
  }
}

export default App;
