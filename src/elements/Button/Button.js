import "./Button.scss"

const Button = (props) => {
    return (
        <button className={`button button-${props.type} button-${props.size} button-${props.status}`}>
            {props.children}
        </button>
    )
}

export default Button;