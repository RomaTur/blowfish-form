import * as React from 'react';
import './App.css';
import UserInputs from '../UserInputs/UserInputs';
import Hash from '../Hash/Hash';
import { Blowfish } from 'javascript-blowfish';

export interface AppState {
  inputs: any;
  hash: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: Object) {
    super(props);

    this.state = {
      inputs: {
        login: '',
        pass: '',
        secretKey: ''
      },
      hash: ''
    };
  }

  setVal(value: any, type: string): any {
    let inputs = {
      [type]: value
    };
    this.setState({
      inputs: Object.assign(this.state.inputs, inputs)
    });
    if (this.state.inputs.login !== '' && this.state.inputs.pass !== '' && this.state.inputs.secretKey !== '') {
      this.encrypt();
    } else {
      this.setState({
        hash: ''
      });
    }
  }

  encrypt() {
    const bf = new Blowfish(this.state.inputs.secretKey);
    var encrypted = bf.encrypt(this.state.inputs.pass);
    // var decrypted = bf.decrypt(encrypted);
    // console.log(encrypted, decrypted);
    this.setState({
      hash: encrypted
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='form'>
          <UserInputs
            setVal={this.setVal.bind(this)}
            inputs={this.state.inputs}
          />
          <Hash
            hash={this.state.hash}
          />
        </div>
      </div>
    );
  }
}

export default App;
