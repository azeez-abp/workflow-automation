import React from 'react'

export const Sidebar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', children, ...props }) => (
  <aside className={[`ui-sidebar`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </aside>
)

export default Sidebar
