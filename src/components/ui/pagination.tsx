import React from 'react'

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  page?: number
  total?: number
}

export const Pagination: React.FC<PaginationProps> = ({ page = 1, total = 1, className = '', children, ...props }) => (
  <nav aria-label="pagination" className={[`ui-pagination`, className].filter(Boolean).join(' ')} {...props}>
    {children ?? <span>{page} / {total}</span>}
  </nav>
)

export default Pagination
