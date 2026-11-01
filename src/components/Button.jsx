const Button = (props) => {
    const { 
        className = '',
        type = 'submit',
        children,
        onClick,
    } = props
    return (
        <button 
            className={`button ${className}`}
            type={type}
            onClick={onClick}
        >
        {children}
        </button>
    )
}

export default Button