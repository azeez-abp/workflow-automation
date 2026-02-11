import React from 'react'

export const ToggleGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div role="group" className={[`ui-toggle-group`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default ToggleGroup
