import * as React from 'react';
import './Decrypt.css';
import UserInputs from './UserInputs/UserInputs';
import Hash from './Hash/Hash';
import { Blowfish } from 'javascript-blowfish';
const sha256 = require('sha256');

export interface DecryptState {
  inputs: any;
  pass: string;
}

class Decrypt extends React.Component<{}, DecryptState> {
  constructor(props: Object) {
    super(props);

    this.state = {
      inputs: {
        login: '',
        hash: '',
        secretKey: ''
      },
      pass: ''
    };
  }

  setVal(value: any, type: string): any {
    let inputs = {
      [type]: value
    };
    this.setState({
      inputs: Object.assign(this.state.inputs, inputs)
    });
    if (this.state.inputs.login !== '' 
      && this.state.inputs.hash !== '' 
      && this.state.inputs.secretKey !== '') {
      this.decrypt();
    } else {
      this.setState({
        pass: ''
      });
    }
  }

  decrypt() {
    const bf = new Blowfish(this.state.inputs.secretKey);
    let decrypted = bf.base64Decode(this.state.inputs.hash);
    if (decrypted.length % 8 === 0) {
      decrypted = bf.decrypt(bf.base64Decode(this.state.inputs.hash));
      const login = this.state.inputs.login;
      const salt1 = sha256(login.toString().toLowerCase().substring(0, 4)).substring(0, 4);
      if (decrypted.substring(0, 4) === salt1) {
        this.setState({
          pass: decrypted.substring(4, decrypted.length).split('\0')[0]
        });
      } else {
        this.setState({
          pass: ''
        });
      }
    }
  }

  render() {
    return (
      <div className='form form--encrypt'>
        <h2 className='form__title'>Decrypt</h2>
        <UserInputs
          setVal={this.setVal.bind(this)}
          inputs={this.state.inputs}
        />
        <Hash
          hash={this.state.pass}
        />
      </div>
    );
  }
}

export default Decrypt;
