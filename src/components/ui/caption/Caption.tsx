import React from 'react';

type CaptionPropsColor = 'dark-navy' | 'regent-gray' | 'royal-blue';
const CaptionPropsColorMap = {
  'dark-navy': 'text-dark-navy',
  'regent-gray': 'text-regent-gray',
  'royal-blue': 'text-royal-blue'
};

type CaptionPropsWeight = 'regular' | 'medium';
const CaptionPropsWeightMap = {
  'regular': 'font-regular',
  'medium': 'font-medium'
};

interface CaptionProps {
  color?: CaptionPropsColor;
  weight?: CaptionPropsWeight;
  children: JSX.Element | string;
  className?: string;
};

const Caption: React.FC<CaptionProps> = ({
  color = 'regent-gray',
  weight = 'regular',
  children,
  className = ''
}) => {
  return (
    <span className={`font-montserrat ${CaptionPropsColorMap[color]} text-xs ${CaptionPropsWeightMap[weight]} leading-relaxed tracking-wide ${className}`}>{children}</span>
  );
};

export default Caption;