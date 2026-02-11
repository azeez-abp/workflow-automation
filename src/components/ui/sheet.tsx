import React from 'react'

export const Sheet: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={[`ui-sheet`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Sheet
