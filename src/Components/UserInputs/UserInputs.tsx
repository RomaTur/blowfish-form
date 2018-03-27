import * as React from 'react';
import Input from './Input/Input';
import './UserInputs.css';

interface AppProps {
  inputs: any;
  setVal: any;
}

class UserInputs extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {

    console.log(this.props.inputs);
  }

  render() {
    return (
      <div className='UserInputs'>
        <Input 
          type='login'
          name='Логин'
          setVal={this.props.setVal}
        />
        <Input 
          type='pass'
          name='Пароль'
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