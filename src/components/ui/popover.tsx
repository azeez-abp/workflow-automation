import React from 'react'

export const Popover: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div role="tooltip" className={[`ui-popover`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Popover
