import React from 'react'
import './Label.css'

export const Label = ({children, ...rest}) => {
  return (
    <label {...rest}>
      {children}
    </label>
  )
}
