import React from 'react'

export const RadioGroup: React.FC<React.FieldsetHTMLAttributes<HTMLFieldSetElement>> = ({ className = '', children, ...props }) => (
  <fieldset className={[`ui-radio-group`, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </fieldset>
)

export default RadioGroup
