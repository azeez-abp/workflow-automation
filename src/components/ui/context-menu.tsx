import React from 'react'

export const ContextMenu: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div role="menu" className={[`ui-context-menu`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default ContextMenu
