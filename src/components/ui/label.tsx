import React from 'react'

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, className = '', ...props }) => (
  <label className={[`ui-label`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </label>
)

export default Label
