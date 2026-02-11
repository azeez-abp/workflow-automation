import React from 'react'

export const Chart: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={[`ui-chart`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Chart
