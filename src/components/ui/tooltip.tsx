import React from 'react'

export const Tooltip: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div role="tooltip" className={[`ui-tooltip`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Tooltip
