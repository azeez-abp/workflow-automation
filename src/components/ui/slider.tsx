import React from 'react'

export const Slider = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input type="range" ref={ref} className={[`ui-slider`, props.className || ''].filter(Boolean).join(' ')} {...props} />
))

Slider.displayName = 'Slider'

export default Slider
