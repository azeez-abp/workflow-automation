import React from 'react'

export const HoverCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={[`ui-hover-card`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default HoverCard
