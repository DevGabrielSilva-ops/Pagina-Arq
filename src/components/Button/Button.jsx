import './Button.css'

function Button({buttonStyle,loading,children,...props }) {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children}
        </button>  
    )
} 

export default Button