import React, { useState } from 'react';

function ColorChanger() {
  const [buttonColor, setButtonColor] = useState('red');

  const handleClick = () => {
    setButtonColor(buttonColor === 'red' ? 'green' : 'red');
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleClick} style={{ backgroundColor: buttonColor }}>
        Нажми меня!
      </button>
    </div>
  );
}

export default ColorChanger;
