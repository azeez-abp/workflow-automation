import React from 'react'

export interface InputOtpProps extends React.InputHTMLAttributes<HTMLInputElement> {
  length?: number
}

export const InputOtp: React.FC<InputOtpProps> = ({ length = 4, className = '', ...props }) => (
  <div className={[`ui-input-otp`, className].filter(Boolean).join(' ')}>
    {Array.from({ length }).map((_, i) => (
      <input key={i} type="text" inputMode="numeric" maxLength={1} style={{ width: 32 }} {...props} />
    ))}
  </div>
)

export default InputOtp
