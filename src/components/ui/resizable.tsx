import React from 'react'

export const Resizable: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={[`ui-resizable`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Resizable
