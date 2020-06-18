import React from 'react'

interface IconButtonProps {
  type?: 'button' | 'submit' | 'reset'
  children?: React.ReactNode
}

function IconButton({ type, children }: IconButtonProps): JSX.Element {
  return <button type={type}>{children}</button>
}

IconButton.defaultProps = {
  type: 'button',
}

export default IconButton
