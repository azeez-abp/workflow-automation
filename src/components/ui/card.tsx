import React from 'react'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={[`ui-card`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Card
