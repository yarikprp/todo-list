const Button = (props) => {
    const { 
        className = '',
        type = 'submit',
        children,
        isDisabled,
        onClick,
    } = props
    return (
        <button 
            className={`button ${className}`}
            type={type}
            disabled={isDisabled}
            onClick={onClick}
        >
        {children}
        </button>
    )
}

export default Button