import React from 'react';
import './Button.css';

export const Button = ({children, ...rest}) => {
  return (
    <button {...rest}>
      {children}
    </button>
  )
}
