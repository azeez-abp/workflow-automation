import React from 'react'

export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className = '', children, ...props }) => (
  <span className={[`ui-badge`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </span>
)

export default Badge
