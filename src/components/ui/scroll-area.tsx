import React from 'react'

export const ScrollArea: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={[`ui-scroll-area`, className].filter(Boolean).join(' ')} style={{ overflow: 'auto' }} {...props}>
    {children}
  </div>
)

export default ScrollArea
