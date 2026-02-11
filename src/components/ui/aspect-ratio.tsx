import React from 'react'

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: string
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ ratio = '16/9', className = '', children, ...props }) => {
  const [w, h] = ratio.split('/').map(Number)
  const padding = Number.isFinite(w) && Number.isFinite(h) ? `${(h / w) * 100}%` : '56.25%'
  return (
    <div className={[`ui-aspect-ratio`, className].filter(Boolean).join(' ')} {...props}>
      <div style={{ position: 'relative', width: '100%', paddingTop: padding }}>
        <div style={{ position: 'absolute', inset: 0 }}>{children}</div>
      </div>
    </div>
  )
}

export default AspectRatio
