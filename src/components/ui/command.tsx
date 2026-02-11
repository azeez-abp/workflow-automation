import React from 'react'

export const CommandPalette: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div role="dialog" className={[`ui-command`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export default CommandPalette
