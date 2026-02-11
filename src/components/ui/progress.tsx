import React from 'react'

export interface ProgressProps extends React.ProgressHTMLAttributes<HTMLProgressElement> {}

export const Progress: React.FC<ProgressProps> = ({ className = '', ...props }) => (
  <progress className={[`ui-progress`, className].filter(Boolean).join(' ')} {...props} />
)

export default Progress
