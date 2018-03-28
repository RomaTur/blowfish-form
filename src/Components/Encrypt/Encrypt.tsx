import * as React from 'react';
import './Encrypt.css';
import UserInputs from './UserInputs/UserInputs';
import Hash from './Hash/Hash';
import { Blowfish } from 'javascript-blowfish';
const sha256 = require('sha256');

export interface EncryptState {
  inputs: any;
  hash: string;
}

class Encrypt extends React.Component<{}, EncryptState> {
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
    const login = this.state.inputs.login;
    const salt1 = sha256(login.toString().toLowerCase().substring(0, 4)).substring(0, 4);
    // console.log(salt1);
    var encrypted = bf.base64Encode(bf.encrypt(salt1 + this.state.inputs.pass));
    // var decrypted = bf.decrypt(encrypted);
    this.setState({
      hash: encrypted
    });
  }

  render() {
    return (
      <div className='form form--encrypt'>
        <h2 className='form__title'>Encrypt</h2>
        <UserInputs
          setVal={this.setVal.bind(this)}
          inputs={this.state.inputs}
        />
        <Hash
          hash={this.state.hash}
        />
      </div>
    );
  }
}

export default Encrypt;
