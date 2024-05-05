import React from 'react';

const Square = ({ n }) => {
  const squareNumber = n * n;
  return (
    <div>
      {squareNumber}
    </div>
  );
};

export default Square;
