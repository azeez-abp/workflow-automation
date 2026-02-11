import React from 'react'

export const Tabs: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={[`ui-tabs`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Tabs
