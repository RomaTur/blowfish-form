import * as React from 'react';
import './Hash.css';

class Hash extends React.Component<{hash: string}, {}> {
  render() {
    return (
      <div>
        <p>
          {this.props.hash}
        </p>
      </div>
    );
  }
}

export default Hash;
