import React from 'react'

export const Toggle: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = '', children, ...props }) => (
  <button type="button" className={[`ui-toggle`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </button>
)

export default Toggle
