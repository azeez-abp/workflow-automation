import React from 'react'

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

export const Toast: React.FC<ToastProps> = ({ title, className = '', children, ...props }) => (
  <div role="status" className={[`ui-toast`, className].filter(Boolean).join(' ')} {...props}>
    {title && <strong>{title}</strong>}
    <div>{children}</div>
  </div>
)

export default Toast
