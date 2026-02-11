import React from 'react'

export const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ className = '', children, ...props }) => (
  <form className={[`ui-form`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </form>
)

export default Form
