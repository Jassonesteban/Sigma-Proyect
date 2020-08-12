import React from 'react'
import './Select.css'

export const Select = ({children, options, ...rest}) => {
  return (
    <select {...rest}>
      <option name="placeholder">Seleccione uno</option>
      {options.map(option => <option>{option}</option>)}
    </select>
  )
}
