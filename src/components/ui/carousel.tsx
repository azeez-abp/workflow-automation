import React from 'react'

export const Carousel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={[`ui-carousel`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Carousel
