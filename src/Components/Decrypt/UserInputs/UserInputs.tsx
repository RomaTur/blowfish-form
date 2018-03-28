import * as React from 'react';
import Input from './Input/Input';
import './UserInputs.css';

interface AppProps {
  inputs: any;
  setVal: any;
}

class UserInputs extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className='form__inputs'>
        <Input 
          type='login'
          name='Логин'
          setVal={this.props.setVal}
        />
        <Input 
          type='hash'
          name='Hash'
          setVal={this.props.setVal}
        />
        <Input 
          type='secretKey'
          name='Секретный ключ'
          setVal={this.props.setVal}
        />
      </div>
    );
  }
}

export default UserInputs; 