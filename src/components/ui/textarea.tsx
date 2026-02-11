import React from 'react'

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => (
  <textarea ref={ref} className={[`ui-textarea`, props.className || ''].filter(Boolean).join(' ')} {...props} />
))

Textarea.displayName = 'Textarea'

export default Textarea
