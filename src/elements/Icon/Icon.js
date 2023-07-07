import "./Icon.scss"

const Icon = (props) => {
    return (
        <span className={`icon icon-${props.type} icon-${props.size} icon-${props.status}`}>
            <i className={`${props.icon}`}></i>
        </span>
    )
}

export default Icon;