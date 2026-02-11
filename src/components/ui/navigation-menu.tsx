import React from 'react'

export const NavigationMenu: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', children, ...props }) => (
  <nav className={[`ui-navigation-menu`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </nav>
)

export default NavigationMenu
