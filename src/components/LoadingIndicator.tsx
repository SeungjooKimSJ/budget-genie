import React from 'react';
import Lottie from 'lottie-react';
import genieLampAnimation from '@/animations/genie-lamp.json';

interface LoadingIndicatorProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeClasses = {
  small: 'w-16 h-16',
  medium: 'w-24 h-24',
  large: 'w-32 h-32'
};

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 'medium',
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <Lottie
        animationData={genieLampAnimation}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LoadingIndicator; 