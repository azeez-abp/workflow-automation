import React from 'react'

export const DropdownMenu: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div role="menu" className={[`ui-dropdown-menu`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default DropdownMenu
