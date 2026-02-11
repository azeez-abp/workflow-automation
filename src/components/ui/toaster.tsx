import React from 'react'

export const Toaster: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div aria-live="polite" className={[`ui-toaster`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default Toaster
