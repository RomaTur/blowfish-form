import * as React from 'react';
import './App.css';
import UserInputs from '../UserInputs/UserInputs';
import { Blowfish } from 'javascript-blowfish';

export interface AppState {
  inputs: any;
}

class App extends React.Component<{}, AppState> {
  constructor(props: Object) {
    super(props);

    this.state = {
      inputs: {
        login: '',
        pass: '',
        secretKey: 's'
      }
    };
  }

  setVal(value: any, type: string): any {
    let inputs = {
      [type]: value
    };
    this.setState({
      inputs: Object.assign(this.state.inputs, inputs)
    });
    this.encrypt();
  }

  encrypt() {
    const bf = new Blowfish(this.state.inputs.secretKey);
    var encrypted = bf.encrypt(this.state.inputs.pass);
    var decrypted = bf.decrypt(encrypted);
    console.log(encrypted, decrypted);
  }

  render() {
    return (
      <div className='App'>
        <UserInputs
          setVal={this.setVal.bind(this)}
          inputs={this.state.inputs}
        />
      </div>
    );
  }
}

export default App;
