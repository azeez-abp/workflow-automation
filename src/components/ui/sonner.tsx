import React from 'react'

export const Sonner: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={[`ui-sonner`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Sonner
