import React from 'react'

export const Separator: React.FC<React.HTMLAttributes<HTMLHRElement>> = ({ className = '', ...props }) => (
  <hr className={[`ui-separator`, className].filter(Boolean).join(' ')} {...props} />
)

export default Separator
