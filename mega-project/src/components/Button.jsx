function Button({
  children,
  role = '',
  className = '',
  type = 'button',
  ...props
}) {
  return <button className={`cursor-pointer ${className}`} role={role} type={type} {...props}>{children}</button>;
}

export default Button;