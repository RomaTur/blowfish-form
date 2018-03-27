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
      <div>
        <h4>{this.props.name}</h4>
        <input
          onChange={this.setVal.bind(this)}
        />
      </div>
    );
  }
}

export default Input;
