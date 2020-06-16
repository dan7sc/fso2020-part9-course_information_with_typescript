import React from 'react';

interface TotalProps {
  exerciseSum: number;
}

const Total: React.FC<TotalProps> = ({ exerciseSum }) => {
  return (
    <p>
      Number of exercises{" "}
      {exerciseSum}
    </p>
  );
}

export default Total;
