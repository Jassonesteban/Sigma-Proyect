import React from 'react'
import './Form.css'


export const Form = ({onSubmit, children}) => {
  return (
    <form className="sigma__form" onSubmit={onSubmit}>
      {children}
    </form>
  )
}
