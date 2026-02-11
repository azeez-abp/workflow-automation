import React from 'react'

export const MenuBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div role="menubar" className={[`ui-menubar`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default MenuBar
