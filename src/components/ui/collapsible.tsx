import React from 'react'

export const Collapsible: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={[`ui-collapsible`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Collapsible
