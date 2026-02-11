import React from 'react'

export const Drawer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <aside className={[`ui-drawer`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </aside>
)

export default Drawer
