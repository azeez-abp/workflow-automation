import React from 'react'

export const Breadcrumb: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children, className = '', ...props }) => (
  <nav aria-label="breadcrumb" className={[`ui-breadcrumb`, className].filter(Boolean).join(' ')} {...props}>
    <ol>{children}</ol>
  </nav>
)

export default Breadcrumb
