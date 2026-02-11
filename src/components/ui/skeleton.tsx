import React from 'react'

export const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
  <div className={[`ui-skeleton`, className].filter(Boolean).join(' ')} aria-hidden {...props} />
)

export default Skeleton
