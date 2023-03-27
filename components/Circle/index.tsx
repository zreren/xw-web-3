import React from 'react';

interface CircleProps {
  radius: number,
  fill: string,
  stroke?: string,
  strokeWidth?: number,
}

const Circle: React.FC<CircleProps> = ({ radius, fill, stroke, strokeWidth }) => {
  return (
    <svg>
      <circle cx="50%" cy="50%" r={radius} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
};

export default Circle;