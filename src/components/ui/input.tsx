import React from 'react'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input ref={ref} className={[`ui-input`, props.className || ''].filter(Boolean).join(' ')} {...props} />
))

Input.displayName = 'Input'

export default Input
