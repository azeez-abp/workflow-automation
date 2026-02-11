import React from 'react'

export const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({ className = '', children, ...props }) => (
  <table className={[`ui-table`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </table>
)

export default Table
