import React from 'react'
import './Input.css'

export const Input = ({children, ...rest}) => {
  return (
    <input {...rest}>
      {children}
    </input>
  )
}
