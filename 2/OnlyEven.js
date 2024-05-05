import React from 'react';

class OnlyEven extends React.Component {
  render() {
    const { arr } = this.props;
    const evenElements = arr.filter(item => item % 2 === 0);
    const result = evenElements.join(', ');
    return <div>{result}</div>;
  }
}

export default OnlyEven;
