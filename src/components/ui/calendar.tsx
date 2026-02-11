import React from 'react'

export const Calendar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={[`ui-calendar`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Calendar
