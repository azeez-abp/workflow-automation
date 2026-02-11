import React from 'react'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'danger'
}

export const Alert: React.FC<AlertProps> = ({ variant = 'info', className = '', children, ...props }) => {
  return (
    <div role="alert" className={[`ui-alert ui-alert-${variant}`, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export default Alert
