import React from 'react'

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number
}

export const Avatar = ({ size = 32, className = '', ...props }: AvatarProps) => (
  <img {...props} width={size} height={size} className={[`ui-avatar`, className].filter(Boolean).join(' ')} />
)

export default Avatar
