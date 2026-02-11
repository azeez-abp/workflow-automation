import React from 'react'

export const Switch = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input type="checkbox" role="switch" ref={ref} {...props} />
))

Switch.displayName = 'Switch'

export default Switch
