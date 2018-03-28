import * as React from 'react';
import './Input.css';

interface UserInputsProps {
  type: string;
  name: string;
  setVal(value: string, type: string): any;
}

class Input extends React.Component<UserInputsProps, {value: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ''
    };
  }

  setVal(event: any) {
    const target: HTMLInputElement = event.target;
    this.setState({
      value: target.value
    });
    this.props.setVal(target.value, this.props.type);
  }

  render() {
    return (
      <div className='form__input'>
        {/* <h6 className='form__input-title'>{this.props.name}:</h6> */}
        <input
          className='form__input-area'
          placeholder={this.props.name}
          onChange={this.setVal.bind(this)}
        />
      </div>
    );
  }
}

export default Input;
